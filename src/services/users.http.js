const {
verTodosLosUsuarios,
verUsuarioPorId,
crearUsuario,
borrarUsuario,
actualizarUsuario} = require('../controllers/users.controllers')
const express =require('express')


const getAll = (req,res) => {
    const data = verTodosLosUsuarios()
    res.status(200).json({
        item:data.length,
        response:data
    }
    )
}

const getById= (req,res) =>{
    const id = Number(req.params.id)
    if(id){
    const data = verUsuarioPorId(id)
    if (data.id) {
        res.status(200).json(data)
    }else{
        res.status(400).json({message:'Id invalid'})
    }}else{
    res.status(400).json({message:'Id not a number'})
}}

const createUser=(req,res)=>{
    const userObj= req.body
    

    if(userObj){
        const data = crearUsuario(userObj)
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"User invalid"})
        }
    }else{
        res.status(400).json({message:'No users'})
    }
}


const deleteUser= (req,res) =>{
    const id =Number(req.params.id)
    const data=borrarUsuario(id)

    if (data) {
        res.status(204).json()
    }else{
        res.status(400).json({message:'Invalid id'})}
}

const actualityUsers=(req,res)=>{
    const id = Number(req.params.id)
    const userObj = req.body
    const data = actualizarUsuario(id,userObj)
    if(userObj){
        res.status(200).json()
    }else{
        res.status(400).json({message:'missing data'})
    }
}



module.exports={
    getAll,
    getById,
    createUser,
    deleteUser,
    actualityUsers
}