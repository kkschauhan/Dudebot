require('dotenv').config();

console.log('Testing environment variables...');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'SET' : 'NOT SET');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);

if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY is missing!');
  process.exit(1);
} else {
  console.log('✅ OPENAI_API_KEY is set');
}
