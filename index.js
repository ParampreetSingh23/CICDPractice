import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  
  res.json({ message: 'Hello, World!' });
});
app.get('/cloud', (req, res) => {
  res.json({ message: 'Welcome to the CI/CD Project BASICS github actions' });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});