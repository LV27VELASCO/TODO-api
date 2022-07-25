const express = require('express')
const controller = express()


const taskBD = [
    {
        id: 1,
        title: "Lavar la loza",
        task: "Debes lavar la loza",
        state: false,
    },
    {
        id: 2,
        title: "Estudiar",
        task: "Debes estudiar",
        state: false,
    },
    {
        id: 3,
        title: "Comer",
        task: "A comer perrin",
        state: true,
    },
]

controller.use(express.json())

const getAllTask = () => {
    return taskBD
}

const getTaskById = (id) => {
    const filteredBD = taskBD.filter(task => task.id === id)
    return filteredBD[0]
}

const createTask = (taskObj) => {
    if (taskBD.length === 0) {
        const newTask = {
            id: 1,
            id: id,
            title: taskObj.title,
            task: taskObj.task,
            state: taskObj.state,
        }
        taskBD.push(newTask)
        return taskBD
    } else {
        const newTask = {
            id: taskBD[taskBD.length - 1].id + 1,
            title: taskObj.title,
            task: taskObj.task,
            state: taskObj.state,
        }
        taskBD.push(newTask)
        return taskBD
    }

}


const deleteTask = (id) => {
    const index = taskBD.findIndex(task => task.id === id)

    if (index != -1) {
        taskBD.splice(index, 1)
        return true
    } else {
        return false
    }
}

const actualityTask = (id, taskObj) => {
    const index = taskBD.findIndex(task => task.id === id)

    if (taskObj.title&&taskObj.task&&taskObj.state=== true || false) {
        taskBD[index]={
            id,
            title: taskBD[index].title,
            task: taskBD[index].task,
            state:taskObj.state
        }
            
        return true
    } else { false }
}

module.exports = {
    verTodasLasTareas: getAllTask,
    verTareaPorId: getTaskById,
    crearTarea: createTask,
    borrarTarea: deleteTask,
    actualizarTarea: actualityTask
}

