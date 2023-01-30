module.exports = (app) => {
  const tasks = require('../controllers/todoControllers.js')

  // app.routes('/tasks').get(tasks.getAll).post(tasks.create).delete(tasks.delete)

  // app.routes('/tasks/:taskId').get(tasks.getOne).put(tasks.update).patch(tasks.complete)

  // Create a new task
  app.post('/tasks', tasks.create)

  // Retrieve all tasks
  app.get('/tasks', tasks.getAll)

  // Retrieve a single task with taskId
  app.get('/tasks/:taskId', tasks.getOne)

  // Update a task with taskId
  app.put('/task/:taskId', tasks.update)

  // Complete a task with taskId
  app.patch('/task/:taskId', tasks.complete)

  // Delete tasks that are completed
  app.delete('/tasks', tasks.delete)
}
