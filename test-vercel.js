// Test script to verify Vercel deployment
const axios = require('axios');

const BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:5000';

async function testVercelDeployment() {
  console.log('🧪 Testing Vercel Deployment...\n');
  
  const tests = [
    {
      name: 'Health Check',
      url: `${BASE_URL}/api/hello`,
      method: 'GET',
      expectedStatus: 200
    },
    {
      name: 'Categories Endpoint',
      url: `${BASE_URL}/api/categories`,
      method: 'GET',
      expectedStatus: 200
    },
    {
      name: 'Chat Endpoint - Knowledge Query',
      url: `${BASE_URL}/api/chat`,
      method: 'POST',
      data: { message: 'How can I check my leave balance?' },
      expectedStatus: 200
    },
    {
      name: 'Chat Endpoint - Todo Command',
      url: `${BASE_URL}/api/chat`,
      method: 'POST',
      data: { 
        message: 'create task to fill cat form',
        context: 'todo_management',
        todos: []
      },
      expectedStatus: 200
    }
  ];

  for (const test of tests) {
    try {
      console.log(`📋 Testing: ${test.name}`);
      
      const config = {
        method: test.method,
        url: test.url,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      if (test.data) {
        config.data = test.data;
      }
      
      const response = await axios(config);
      
      if (response.status === test.expectedStatus) {
        console.log(`✅ ${test.name}: PASSED (${response.status})`);
        
        if (test.name.includes('Chat')) {
          console.log(`   Reply: ${response.data.reply?.substring(0, 100)}...`);
          if (response.data.sources) {
            console.log(`   Sources: ${response.data.sources.length} found`);
          }
          if (response.data.todoAction) {
            console.log(`   Todo Action: ${response.data.todoAction.type}`);
          }
        }
      } else {
        console.log(`❌ ${test.name}: FAILED (Expected ${test.expectedStatus}, got ${response.status})`);
      }
    } catch (error) {
      console.log(`❌ ${test.name}: ERROR - ${error.message}`);
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Data: ${JSON.stringify(error.response.data)}`);
      }
    }
    
    console.log('');
  }
  
  console.log('🎉 Vercel deployment test completed!');
}

// Run the test
testVercelDeployment().catch(console.error);
