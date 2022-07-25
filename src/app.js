const express = require('express')
require('dotenv').config()
const useRouter= require('./services/task.router').router


const port = process.env.PORT
const app = express()

// const usersBD = [
//     {
//         id: 1,
//         nombre: "juan",
//         edad: "22",
//         oficio: "lastre"
//     },
// ]


// /*
// {
//     id:1
//     nombre:"juan",
//     edad:"22",
//     oficio:"lastre"
// }
// */

app.use(express.json())


// app.get('/users', (req, res) => {
//     res.status(200).json(usersBD)
// })

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const filterUsers = usersBD.filter(item => item.id === id)


//     if (filterUsers.length > 0) {
//         res.status(200).json(filterUsers[0])
//     } else {
//         res.status(400).json({ message: 'id invalido' })
//     }
// })

// app.post('/users', (req, res) => {
//     const data = req.body
//     if (usersBD.length === 0) {
//         const newData = {
//             id: 1,
//             ...data
//         }
//         usersBD.push(newData)

//     } else {

//         const newData = {
//             id: usersBD[usersBD.length - 1].id + 1,
//             ...data
//         }
//         usersBD.push(newData)
//     }
//     res.status(201).json(usersBD)
// })


// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = usersBD.findIndex(item => item.id === id)

//     if (index != -1) {
//         usersBD.splice(index, 1)
//         res.status(204).json()
//     } else {
//         res.status(400).json({ message: 'invalid id' })
//     }
// })

// app.put('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const data = req.body
//     const index = usersBD.findIndex(item => item.id === id)


//     if (data.id && data.nombre && data.edad && data.oficio) {
//         usersBD[index] = {
//             id: id,
//             nombre: data.nombre,
//             edad: data.edad,
//             oficio: data.oficio
//         }
//     }else{
//         res.status(400).json({message:'faltan datos'})
//     }
// })


app.listen(port, () => {
    console.log(`puerto ${port} creado con exito`)
})


app.use('/api/v1', useRouter)
