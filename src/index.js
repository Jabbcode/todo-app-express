import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

import todosRouter from './routes/todos.routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
