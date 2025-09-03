const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

// Import knowledge base
const { knowledgeBase, faqs, contacts, processQuery } = require('./knowledge_base');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

// Health check endpoint
app.get('/', (req, res) => {
  res.send('DudeBot API is running.');
});

// Simple hello endpoint for testing
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from DudeBot API' });
});

// Enhanced RAG-based chat endpoint
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // First, search the knowledge base for relevant information
    const knowledgeResult = processQuery(userMessage);
    
    // Build context for the AI model
    let systemPrompt = `You are DudeBot, an enterprise AI assistant for workplace queries. You provide accurate, helpful information based on the company's knowledge base.`;
    
    let context = '';
    let sources = [];
    
    if (knowledgeResult.type === 'document') {
      context = `Relevant information from ${knowledgeResult.document}:\n${JSON.stringify(knowledgeResult.answer, null, 2)}`;
      sources.push({
        title: knowledgeResult.document,
        confidence: Math.round(knowledgeResult.confidence * 100),
        type: 'document'
      });
    } else if (knowledgeResult.type === 'faq') {
      context = `FAQ Answer: ${knowledgeResult.answer}`;
      sources.push({
        title: 'Company FAQ',
        confidence: 95,
        type: 'faq'
      });
    } else if (knowledgeResult.type === 'contact') {
      context = `Contact Information: ${knowledgeResult.department} - Email: ${knowledgeResult.email || 'N/A'}, Extension: ${knowledgeResult.ext || 'N/A'}`;
      sources.push({
        title: `Contact: ${knowledgeResult.department}`,
        confidence: 100,
        type: 'contact'
      });
    }

    // If we have knowledge base context, use it; otherwise, let AI handle general queries
    const messages = [
      { 
        role: 'system', 
        content: systemPrompt + (context ? `\n\nUse this information to answer the user's question accurately:\n${context}` : '')
      },
      { role: 'user', content: userMessage }
    ];

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
        messages,
        max_tokens: 300,
        temperature: 0.3
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
        }
      }
    );

    const reply = response.data.choices?.[0]?.message?.content?.trim() || '';
    
    res.json({ 
      reply,
      sources: sources.length > 0 ? sources : null,
      knowledgeUsed: knowledgeResult.type !== 'unknown'
    });
  } catch (error) {
    console.error('Chat error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

// New endpoint to get knowledge base categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(knowledgeBase.documents.map(doc => doc.category))];
  res.json({ categories });
});

// New endpoint to search knowledge base
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }
  
  const results = knowledgeBase.search(query);
  res.json({ results: results.slice(0, 5) }); // Return top 5 results
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
