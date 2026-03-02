import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  
  res.json({ message: 'Hello to my first CI/CD Pipeline' });
});
app.get('/cloud', (req, res) => {
  res.json({ message: 'Welcome to the CI/CD Project BASICS github actions' });
});
app.get("/me", (req, res) => {
  res.json({ name: "Parampreet Singh", role: "Software Engineer" });
});
app.get("/health", (req, res) => { 
  res.json({ status: "Healthy" });
 });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});