@echo off
echo 🤖 Setting up DudeBot Enterprise AI Assistant...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install root dependencies
echo 📦 Installing root dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    pause
    exit /b 1
)

REM Install server dependencies
echo 📦 Installing server dependencies...
cd server
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install server dependencies
    pause
    exit /b 1
)
cd ..

REM Install client dependencies
echo 📦 Installing client dependencies...
cd client
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install client dependencies
    pause
    exit /b 1
)
cd ..

REM Create .env file if it doesn't exist
if not exist "server\.env" (
    echo 🔧 Creating environment file...
    echo OPENROUTER_API_KEY=your_openrouter_api_key_here > server\.env
    echo PORT=5000 >> server\.env
    echo NODE_ENV=development >> server\.env
    echo ⚠️  Please edit server\.env and add your OpenRouter API key
) else (
    echo ✅ Environment file already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Edit server\.env and add your OpenRouter API key
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:5000 in your browser
echo.
echo For more information, see README.md
pause