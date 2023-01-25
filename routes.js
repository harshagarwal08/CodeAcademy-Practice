module.exports = (app) => {
  const tasks = require('./controllers.js')

  // Create a new task
  app.post('/tasks', tasks.create)

  // Retrieve all tasks
  app.get('/tasks', tasks.getAll)

  // Retrieve a single task with taskId
  app.get('/tasks/:taskId', tasks.getOne)

  // Update a task with taskId
  app.put('/tasks/:taskId', tasks.update)

  // Complete a task with taskId
  app.patch('/tasks/:taskId', tasks.complete)

  // Delete tasks that are completed
  app.delete('/tasks', tasks.delete)
}
