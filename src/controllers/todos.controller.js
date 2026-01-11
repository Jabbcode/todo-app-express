import Todo from '../model/Todo.model.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json({ todos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const findByIdTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      return res.status(422).json({
        status: 422,
        message: 'Title is required',
      });
    }

    const newTodo = new Todo(req.body);
    await newTodo.save();
    return res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
