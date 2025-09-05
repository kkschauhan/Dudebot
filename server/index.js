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

// AI-powered Todo Intent Processing
async function processTodoIntent(message, todos) {
  if (!process.env.GROQ_API_KEY) {
    return null;
  }

  try {
    const systemPrompt = `You are a todo management AI. Analyze the user's message and determine if they want to perform a todo action.

Available todo actions:
- create: User wants to add a new todo item
- complete: User wants to mark a todo as done/complete
- delete: User wants to remove a todo item
- edit: User wants to modify an existing todo

Current todos: ${JSON.stringify(todos.map(t => ({ id: t.id, text: t.text, completed: t.completed })))}

Respond with a JSON object containing:
- type: one of "create", "complete", "delete", "edit", or null if no todo action
- title: task title (for create/edit)
- id: todo id (for complete/delete/edit)
- priority: "low", "medium", "high" (optional, for create)

Examples:
"create a new task to fill my cat form" -> {"type": "create", "title": "fill my cat form"}
"mark the presentation task as done" -> {"type": "complete", "id": "find_matching_id"}
"delete the old meeting task" -> {"type": "delete", "id": "find_matching_id"}`;

    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 200,
        temperature: 0.1
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    const content = response.data.choices?.[0]?.message?.content?.trim();
    if (content) {
      try {
        const action = JSON.parse(content);
        if (action.type && action.type !== 'null') {
          // For complete/delete/edit actions, try to find matching todo by text
          if ((action.type === 'complete' || action.type === 'delete' || action.type === 'edit') && !action.id) {
            const matchingTodo = await findMatchingTodo(message, todos);
            if (matchingTodo) {
              action.id = matchingTodo.id;
            }
          }
          return action;
        }
      } catch (e) {
        console.log('Failed to parse AI response as JSON:', content);
      }
    }
  } catch (error) {
    console.error('Error processing todo intent:', error);
  }
  
  return null;
}

// AI-powered semantic task matching
async function findMatchingTodo(message, todos) {
  if (!process.env.GROQ_API_KEY || todos.length === 0) {
    return null;
  }

  try {
    const systemPrompt = `You are a task matching AI. Given a user's message and a list of existing tasks, find the best matching task.

Current tasks: ${JSON.stringify(todos.map(t => ({ id: t.id, text: t.text, completed: t.completed })))}

The user might refer to tasks using:
- Synonyms (presentation = pitch, meeting = call, etc.)
- Partial names (just "presentation" when task is "prepare presentation slides")
- Related concepts (work on the deck = presentation task)

Respond with a JSON object:
- id: the matching task ID (if found)
- confidence: 0-1 score of how confident you are
- reason: brief explanation of why it matches

Examples:
User: "complete the pitch" → Task: "prepare presentation slides" → {"id": "task_id", "confidence": 0.9, "reason": "pitch is synonymous with presentation"}
User: "finish the deck" → Task: "create PowerPoint presentation" → {"id": "task_id", "confidence": 0.8, "reason": "deck refers to presentation slides"}`;

    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Find matching task for: "${message}"` }
        ],
        max_tokens: 150,
        temperature: 0.1
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    const content = response.data.choices?.[0]?.message?.content?.trim();
    if (content) {
      try {
        const match = JSON.parse(content);
        if (match.id && match.confidence > 0.6) {
          return todos.find(t => t.id === match.id);
        }
      } catch (e) {
        console.log('Failed to parse AI response as JSON:', content);
      }
    }
  } catch (error) {
    console.error('Error in semantic task matching:', error);
  }
  
  // Fallback to basic text matching
  return findMatchingTodoFallback(message, todos);
}

// Fallback function for basic text matching
function findMatchingTodoFallback(message, todos) {
  const messageWords = message.toLowerCase().split(' ');
  
  for (const todo of todos) {
    const todoWords = todo.text.toLowerCase().split(' ');
    const matchCount = messageWords.filter(word => 
      todoWords.some(todoWord => 
        todoWord.includes(word) || word.includes(todoWord)
      )
    ).length;
    
    if (matchCount >= 2) {
      return todo;
    }
  }
  
  return null;
}

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
  const context = req.body.context;
  const todos = req.body.todos || [];
  
  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Check if this is a todo management context
    if (context === 'todo_management') {
      const todoAction = await processTodoIntent(userMessage, todos);
      if (todoAction) {
        return res.json({
          reply: `Processing todo action: ${todoAction.type}`,
          todoAction: todoAction,
          sources: null,
          knowledgeUsed: false
        });
      }
    }

    // First, search the knowledge base for relevant information
    const knowledgeResult = processQuery(userMessage);
    
    // Build context for the AI model
    let systemPrompt = `You are DudeBot, an enterprise AI assistant for workplace queries. You provide accurate, helpful information based on the company's knowledge base. 

IMPORTANT INSTRUCTIONS:
1. Always format your responses using markdown for better readability
2. Use **bold** for important terms, *italics* for emphasis, and bullet points with * for lists
3. If you have specific information from the knowledge base, use it directly and accurately
4. If the information is partial or unclear, ask for clarification
5. Be concise but comprehensive in your responses
6. Always mention the source of your information when available

Your goal is to be helpful, accurate, and professional in all interactions.`;
    
    let contextInfo = '';
    let sources = [];
    
    if (knowledgeResult.type === 'document') {
      const formattedAnswer = knowledgeBase.formatAsMarkdown(knowledgeResult.answer);
      contextInfo = `Relevant information from ${knowledgeResult.document} (${knowledgeResult.category}):\n${formattedAnswer}`;
      sources.push({
        title: knowledgeResult.document,
        confidence: Math.round(knowledgeResult.confidence * 100),
        type: 'document',
        category: knowledgeResult.category,
        matchedTerms: knowledgeResult.matchedTerms
      });
    } else if (knowledgeResult.type === 'faq') {
      contextInfo = `FAQ Answer: ${knowledgeResult.answer}`;
      sources.push({
        title: 'Company FAQ',
        confidence: 95,
        type: 'faq'
      });
    } else if (knowledgeResult.type === 'contact') {
      contextInfo = `Contact Information: ${knowledgeResult.department} - Email: ${knowledgeResult.email || 'N/A'}, Extension: ${knowledgeResult.ext || 'N/A'}`;
      sources.push({
        title: `Contact: ${knowledgeResult.department}`,
        confidence: Math.round(knowledgeResult.confidence * 100),
        type: 'contact'
      });
    } else if (knowledgeResult.type === 'partial') {
      contextInfo = `Partial match found: ${knowledgeResult.document}. ${knowledgeResult.answer}`;
      if (knowledgeResult.suggestions) {
        contextInfo += `\n\nSuggestions: ${knowledgeResult.suggestions.join(', ')}`;
      }
      sources.push({
        title: knowledgeResult.document,
        confidence: Math.round(knowledgeResult.confidence * 100),
        type: 'partial'
      });
    }

    let reply = '';
    let knowledgeUsed = knowledgeResult.type !== 'unknown';

    // For FAQ responses, use the answer directly without AI processing
    if (knowledgeResult.type === 'faq') {
      reply = knowledgeResult.answer;
    } else {
      // For other responses, use AI with context
      const messages = [
        { 
          role: 'system', 
          content: systemPrompt + (contextInfo ? `\n\nUse this information to answer the user's question accurately:\n${contextInfo}` : '')
        },
        { role: 'user', content: userMessage }
      ];

      // Check if API key is available
      if (!process.env.GROQ_API_KEY) {
        reply = "I'm currently unable to process your request because the AI service is not configured. Please contact your administrator to set up the Groq API key.";
      } else {
    const response = await axios.post(
          'https://api.groq.com/openai/v1/chat/completions',
          {
            model: 'llama-3.1-8b-instant',
            messages,
            max_tokens: 300,
            temperature: 0.3,
            tools: [
              {
                type: "function",
                function: {
                  name: "create_todo",
                  description: "Create a new todo item",
                  parameters: {
                    type: "object",
                    properties: {
                      title: {
                        type: "string",
                        description: "The title of the todo item"
                      },
                      priority: {
                        type: "string",
                        enum: ["low", "medium", "high"],
                        description: "Priority level of the task"
                      }
                    },
                    required: ["title"]
                  }
                }
              },
              {
                type: "function",
                function: {
                  name: "search_knowledge",
                  description: "Search the company knowledge base",
                  parameters: {
                    type: "object",
                    properties: {
                      query: {
                        type: "string",
                        description: "The search query"
                      },
                      category: {
                        type: "string",
                        enum: ["HR", "IT", "Facilities", "Operations"],
                        description: "Category to search in"
                      }
                    },
                    required: ["query"]
                  }
                }
              }
            ],
            tool_choice: "auto"
      },
      {
        headers: {
          'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.GROQ_API_KEY}`
            }
          }
        );

        // Handle function calls
        const choice = response.data.choices?.[0];
        if (choice.message.tool_calls) {
          // Execute the function calls
          for (const toolCall of choice.message.tool_calls) {
            if (toolCall.function.name === 'create_todo') {
              const args = JSON.parse(toolCall.function.arguments);
              // Add todo to the knowledge base or database
              reply = `✅ Created todo: "${args.title}"${args.priority ? ` (Priority: ${args.priority})` : ''}`;
            } else if (toolCall.function.name === 'search_knowledge') {
              const args = JSON.parse(toolCall.function.arguments);
              // Use existing knowledge base search
              const searchResults = knowledgeBase.search(args.query);
              if (searchResults.length > 0) {
                const topResult = searchResults[0];
                reply = `Found information about ${topResult.title}: ${JSON.stringify(topResult.content).substring(0, 200)}...`;
              } else {
                reply = `No information found for "${args.query}"`;
              }
            }
          }
        } else {
          reply = choice.message.content?.trim() || '';
        }
      }
    }
    
    res.json({ 
      reply,
      sources: sources.length > 0 ? sources : null,
      knowledgeUsed
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
