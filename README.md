# DudeBot 🤖

An intelligent virtual assistant for workplace queries and task automation, built with modern web technologies and AI integration.

## Features

### 🧠 Information Assistant
- AI-powered document search and retrieval
- Natural language query processing
- Context-aware responses

### 📅 Intelligent Agent Features
- **Calendar Management**: Schedule meetings and find optimal time slots
- **Task Automation**: Create and manage optimized to-do lists
- **Email Integration**: Gmail API integration for email management
- **Reminders**: Set and manage follow-ups and reminders
- **Natural Language Processing**: Understand and execute tasks in plain English

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **AI**: OpenAI API integration
- **Database**: In-memory storage (demo) / MongoDB Atlas (production)
- **Hosting**: Vercel-ready deployment
- **Email**: Gmail API integration

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key (free tier available)
- Gmail API credentials (optional, for email features)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd dudebot
   npm run install-all
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Start Development:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Environment Variables

Create a `.env` file in the root directory:

```env
# OpenAI API
OPENAI_API_KEY=your_openai_api_key_here

# Gmail API (optional)
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REDIRECT_URI=http://localhost:5000/auth/gmail/callback

# Server
PORT=5000
NODE_ENV=development
```

## API Endpoints

### Chat & AI
- `POST /api/chat` - Send message to DudeBot
- `POST /api/tasks` - Create new task
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update task

### Calendar & Email
- `GET /api/calendar/events` - Get calendar events
- `POST /api/calendar/events` - Create calendar event
- `GET /api/emails` - Get emails
- `POST /api/emails/send` - Send email

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

## Demo Features

For the demo version, DudeBot includes:
- Sample document database with company policies and procedures
- Mock calendar and email functionality
- AI-powered task management
- Natural language interface

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
