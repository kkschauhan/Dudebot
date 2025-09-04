// Test semantic task matching capabilities
const axios = require('axios');

const testCases = [
  {
    task: "prepare presentation slides for client meeting",
    userInput: "complete the pitch",
    expectedMatch: true,
    reason: "pitch is synonymous with presentation"
  },
  {
    task: "create PowerPoint presentation",
    userInput: "finish the deck",
    expectedMatch: true,
    reason: "deck refers to presentation slides"
  },
  {
    task: "call the client about project updates",
    userInput: "mark the phone call as done",
    expectedMatch: true,
    reason: "phone call matches call task"
  },
  {
    task: "review quarterly financial reports",
    userInput: "complete the budget review",
    expectedMatch: true,
    reason: "budget review is related to financial reports"
  },
  {
    task: "send follow-up email to stakeholders",
    userInput: "finish the email task",
    expectedMatch: true,
    reason: "email task matches email-related task"
  },
  {
    task: "prepare presentation slides for client meeting",
    userInput: "delete the meeting notes",
    expectedMatch: false,
    reason: "meeting notes is different from presentation slides"
  }
];

async function testSemanticMatching() {
  console.log('🧪 Testing Semantic Task Matching\n');
  
  for (const testCase of testCases) {
    console.log(`📝 Task: "${testCase.task}"`);
    console.log(`💬 User Input: "${testCase.userInput}"`);
    console.log(`🎯 Expected: ${testCase.expectedMatch ? 'MATCH' : 'NO MATCH'}`);
    console.log(`💡 Reason: ${testCase.reason}`);
    
    // Simulate the AI matching process
    const todos = [{
      id: 'test-task-1',
      text: testCase.task,
      completed: false
    }];
    
    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: testCase.userInput,
        context: 'todo_management',
        todos: todos
      });
      
      const hasMatch = response.data.todoAction && response.data.todoAction.id;
      const result = hasMatch ? '✅ MATCH' : '❌ NO MATCH';
      const actualMatch = hasMatch === testCase.expectedMatch ? '✅ CORRECT' : '❌ INCORRECT';
      
      console.log(`🔍 Result: ${result} (${actualMatch})`);
      
      if (hasMatch) {
        console.log(`📋 Action: ${response.data.todoAction.type}`);
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
    
    console.log('─'.repeat(60));
  }
}

// Run the test
testSemanticMatching().catch(console.error);
