import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodos,
  findByIdTodo,
} from '../controllers/todos.controller.js';

const router = Router();

router.get('/', getTodos);

router.get('/:id', findByIdTodo);

router.post('/', createTodo);

router.delete('/:id', deleteTodo);

export default router;
