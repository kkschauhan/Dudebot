#!/bin/bash

echo "🤖 Setting up DudeBot Enterprise AI Assistant..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

# Create .env file if it doesn't exist
if [ ! -f "server/.env" ]; then
    echo "🔧 Creating environment file..."
    echo "OPENROUTER_API_KEY=your_openrouter_api_key_here" > server/.env
    echo "PORT=5000" >> server/.env
    echo "NODE_ENV=development" >> server/.env
    echo "⚠️  Please edit server/.env and add your OpenRouter API key"
else
    echo "✅ Environment file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit server/.env and add your OpenRouter API key"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:5000 in your browser"
echo ""
echo "For more information, see README.md"
