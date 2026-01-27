const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.use(auth);

router.post('/', async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.userId
  });
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: 'Task deleted' });
});

module.exports = router;
