import express from 'express';
import dotenv from 'dotenv';
import handlePromptAnalyst from './controllers/analyst';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/mcp/prompt/analyst', handlePromptAnalyst);

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
