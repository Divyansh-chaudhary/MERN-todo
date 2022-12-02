import express from 'express';
import TodoController from '../controller/todo.js';

const router = express.Router();

router.get('/', TodoController.showAllTodos);
router.post('/create', TodoController.createTodo);
router.delete('/delete', TodoController.deleteTodo);
router.put('/completed', TodoController.completeTodo);

export default router;
