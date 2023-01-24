const http = require('http')

const { getTasksHandler, getTaskHandler, addTasksHandler, updateTaskHandler, deleteTaskHandler } = require('./handlers.js')

const PORT = 4000
const server = http.createServer((req, res) => {
  const method = req.method
  if (method === 'GET') {
    if (req.url === '/tasks/') getTasksHandler(req, res)
    else return getTaskHandler(req, res)
  } else if (method === 'POST') return addTasksHandler(req, res)
  else if (method === 'PATCH') return updateTaskHandler(req, res)
  else if (method === 'DELETE') return deleteTaskHandler(req, res)
})
server.listen(PORT, () => {
  console.log('Listening on PORT 4000')
})
