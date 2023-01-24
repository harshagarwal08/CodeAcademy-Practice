let tasks = [{ id: 1, task: 'buy shampoo' }, { id: 2, task: 'finish assignment' }]

const getTasks = () => tasks

const getTask = (id) => {
  const data = tasks.filter((task) => {
    return (task.id === Number(id))
  })
  return data
}

const addTasks = (task) => {
  task.id = tasks.length + 1
  tasks.push(task)
}

const updateTask = (id, editedTask) => {
  tasks = tasks.map((task) => {
    if (task.id === Number(id)) return { id: Number(id), task: editedTask.task }
    else return task
  })
}

const deleteTask = (id) => {
  tasks = tasks.filter((task) => {
    return (task.id !== Number(id))
  })
}

module.exports = { getTask, getTasks, addTasks, updateTask, deleteTask }
