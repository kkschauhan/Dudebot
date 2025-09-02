const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// Health check endpoint
app.get('/', (req, res) => {
  res.send('DudeBot API is running.');
});

// Simple hello endpoint for testing
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from DudeBot API' });
});

// Chat endpoint that proxies messages to OpenRouter's Chat API
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
        }
      }
    );
    const reply =
      response.data.choices?.[0]?.message?.content?.trim() || '';
    res.json({ reply });
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
