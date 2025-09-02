const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('DudeBot API is running.');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from DudeBot API' });
});

app.listen(port, () => {
  console.log(`DudeBot server running on port ${port}`);
});
