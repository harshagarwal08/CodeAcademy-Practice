const { getTasks, getTask, addTasks, updateTask, deleteTask } = require('./logic.js')

const getTasksHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const data = getTasks()
  return res.end(JSON.stringify(data))
}

const getTaskHandler = (req, res) => {
  const pathname = req.url.split('/')
  const id = pathname[2]
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const data = getTask(id)
  return res.end(JSON.stringify(data))
}

const addTasksHandler = (req, res) => {
  let task = ''
  req.on('data', (chunk) => {
    task += chunk
  })
  res.writeHead(201, { 'Content-Type': 'application/json' })
  req.on('end', () => {
    addTasks(JSON.parse(task))
    return res.end(JSON.stringify(JSON.parse(task)))
  })
}

const updateTaskHandler = (req, res) => {
  const pathname = req.url.split('/')
  const id = pathname[2]
  let editedTask = ''
  req.on('data', (chunk) => {
    editedTask += chunk
  })
  res.writeHead(200)
  req.on('end', () => {
    updateTask(id, JSON.parse(editedTask))
    return res.end('Succesfully updated!')
  })
}

const deleteTaskHandler = (req, res) => {
  const pathname = req.url.split('/')
  const id = pathname[2]
  deleteTask(id)
  res.writeHead(200)
  return res.end('Succesfully deleted!')
}

module.exports = { getTasksHandler, getTaskHandler, addTasksHandler, updateTaskHandler, deleteTaskHandler }
