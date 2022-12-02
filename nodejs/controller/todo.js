import TodoModel from '../schema/todo.js';

// show list of all todos
const showAllTodos = (req, res) => {
  TodoModel.find()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json({ message: 'An error in show todo' });
    });
};

// store todo in DB
const createTodo = (req, res) => {
  const _todo = new TodoModel({
    title: req.body.title,
    completed: false,
  });

  _todo
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch(() => {
      res.json({ message: 'Error - create todo' });
    });
};

const deleteTodo = (req, res) => {
  TodoModel.deleteOne({ _id: req.body.id })
    .then((response) => {
      res.json(response);
    })
    .catch(() => {
      res.json({ message: 'Error - create todo' });
    });
};

const completeTodo = (req, res) => {
  TodoModel.findOne({ _id: req.body.id })
    .updateOne({ completed: true })
    .then((response) => {
      res.json(response);
    })
    .catch(() => {
      res.json({ message: 'Error - create todo' });
    });
};

export default {
  showAllTodos,
  createTodo,
  deleteTodo,
  completeTodo,
};
