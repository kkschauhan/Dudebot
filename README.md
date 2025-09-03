# DudeBot 🤖

An enterprise-grade AI assistant for workplace queries and task automation, built with modern web technologies and RAG (Retrieval-Augmented Generation) capabilities.

## ✨ Key Features

### 🧠 RAG-Powered Intelligence
- **Knowledge Base Integration**: Answers based on comprehensive company policies and procedures
- **Source Citations**: Every response includes exact sources and confidence scores
- **Context-Aware Responses**: AI understands workplace context and provides relevant information
- **Multi-Modal Search**: Search across HR, IT, Facilities, and Benefits documentation

### 🎤 Voice & Text Interface
- **Voice Input**: Speak your questions naturally using browser speech recognition
- **Modern UI**: Professional, responsive design with dark/light theme support
- **Real-time Typing Indicators**: See when DudeBot is processing your request
- **Quick Actions**: One-click access to common workplace queries

### 📚 Comprehensive Knowledge Base
- **HR Policies**: Leave policies, benefits, compensation, and employee procedures
- **IT Support**: Password resets, equipment requests, software support
- **Facilities**: Office hours, cafeteria, gym, meeting rooms, and amenities
- **Transportation**: Cab services, parking, and commute information
- **BYOD Policies**: Bring Your Own Device guidelines and security requirements

## 🛠️ Tech Stack

- **Frontend**: Modern HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **AI**: OpenRouter API with RAG integration
- **Knowledge Base**: Structured JSON-based document system
- **Voice Recognition**: Web Speech API
- **Styling**: CSS Custom Properties with dark/light theme support
- **Hosting**: Vercel-ready deployment

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenRouter API key (free tier available)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd dudebot
   npm run install-all
   ```

2. **Environment Setup:**
   ```bash
   # Create .env file in server directory
   cd server
   echo "OPENROUTER_API_KEY=your_openrouter_api_key_here" > .env
   ```

3. **Install Dependencies:**
   ```bash
   npm run install-all
   ```

4. **Start Development:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Application: http://localhost:5000

## Environment Variables

Create a `.env` file in the `server` directory:

```env
# OpenRouter API (for AI responses)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

## 🔌 API Endpoints

### Chat & RAG
- `POST /api/chat` - Send message to DudeBot with RAG integration
- `GET /api/categories` - Get available knowledge base categories
- `GET /api/search?q=query` - Search knowledge base directly

### Response Format
```json
{
  "reply": "AI-generated response based on knowledge base",
  "sources": [
    {
      "title": "Leave Policies",
      "confidence": 95,
      "type": "document"
    }
  ],
  "knowledgeUsed": true
}
```

## Deployment

### Vercel Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

### Environment Variables on Vercel

Set the same environment variables in your Vercel project settings.

## 🎯 Usage Examples

### Sample Queries
- "How do I reset my password?"
- "What are the leave policies for sick days?"
- "How can I book transport for late night work?"
- "What benefits am I eligible for?"
- "Tell me about the BYOD policy"
- "How do I update my cab pickup address?"

### Voice Commands
Click the microphone button and speak naturally:
- "Check my leave balance"
- "Contact IT support"
- "What are the cafeteria timings?"

## 📊 Knowledge Base Coverage

The system includes comprehensive information about:
- **HR**: Leave policies, benefits, compensation, employee procedures
- **IT**: Password resets, equipment requests, software support, BYOD policies
- **Facilities**: Office hours, cafeteria, gym, meeting rooms, parking
- **Transportation**: Cab services, address updates, late night transport
- **Benefits**: Health insurance, flexible benefits, life insurance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue in the repository.
