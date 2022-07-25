const express = require('express')
const controller = express()


const userDB = [
    {
        id: 1,
        title: "Lavar la loza",
        task: "Debes lavar la loza",
        state: true,
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

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const filteredBD = userDB.filter(user => user.id === id)
    return filteredBD[0]
}

const createUser = (userObj) => {
    if (userDB.length === 0) {
        const newUser = {
            id: 1,
            id: id,
            title: userObj.title,
            task: userObj.task,
            state: userObj.state,
        }
        userDB.push(newUser)
        return userDB
    } else {
        const newUser = {
            id: userDB[userDB.length - 1].id + 1,
            title: userObj.title,
            task: userObj.task,
            state: userObj.state,
        }
        userDB.push(newUser)
        return userDB
    }

}


const deleteUsers = (id) => {
    const index = userDB.findIndex(user => user.id === id)

    if (index != -1) {
        userDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

const actualityUsers = (id, userObj) => {
    const index = userDB.findIndex(user => user.id === id)

    if (userObj.title && userObj.task && userObj.state) {
        userDB[index] = {
            id: id,
            title: userDB[index].title,
            task: userDB[index].task,
            state: userObj.state,
        }
        return true
    } else { false }
}

module.exports = {
    verTodosLosUsuarios: getAllUsers,
    verUsuarioPorId: getUserById,
    crearUsuario: createUser,
    borrarUsuario: deleteUsers,
    actualizarUsuario: actualityUsers
}

