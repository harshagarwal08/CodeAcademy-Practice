let tasks = []
exports.create = (req, res) => { 
  if (!req.body.task) {
    return res.status(204).send('Task content can not be empty')
  }
  const newTask = {
    ...req.body,
    id: tasks.length + 1,
    isComplete: 'false'
  }
  tasks.push(newTask)
  res.send('Task added successfully!')
}

exports.getAll = (req, res) => {
  if (tasks.length < 1) {
    return res.status(400).send('there are no tasks available')
  }
  res.send(tasks)
}

exports.getOne = (req, res) => {
  if (tasks.length < 1) {
    return res.status(204).send('there are no tasks available')
  }
  const id = req.params.taskId
  const singleTask = tasks.filter((task) => {
    return (task.id === Number(id))
  })
  if (singleTask.length === 0) {
    return res.status(204).send('there are no tasks available')
  }
  res.status(200).send(singleTask)
}

exports.update = (req, res) => {
  const id = req.params.taskId
  const taskTitle = req.body.taskTitle
  tasks = tasks.map((task) => {
    if (task.id === Number(id)) return { ...task, task: taskTitle }
    return task
  })
  res.status(200).send('Task updated successfully!')
}

exports.complete = (req, res) => {
  const id = req.params.taskId
  tasks = tasks.map((task) => {
    if (task.id === Number(id)) return { ...task, isComplete: 'true' }
    return task
  })
  res.status(200).send('Task marked as completed.')
}

exports.delete = (req, res) => {
  tasks = tasks.filter((task) => {
    return (task.isComplete !== 'true')
  })
  res.status(200).send('All the completed tasks are deleted.')
}
