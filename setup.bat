@echo off
echo ========================================
echo    DudeBot Setup Script
echo ========================================
echo.

echo Installing root dependencies...
call npm install

echo.
echo Installing server dependencies...
cd server
call npm install
cd ..

echo.
echo Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Copy env.example to .env and add your API keys
echo 2. Run 'npm run dev' to start development
echo 3. Open http://localhost:3000 in your browser
echo.
echo For production deployment:
echo 1. Run 'npm run build'
echo 2. Deploy to Vercel using 'vercel --prod'
echo.
pause
