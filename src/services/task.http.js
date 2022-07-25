const {
verTodasLasTareas,
verTareaPorId,
crearTarea,
borrarTarea,
actualizarTarea} = require('../controllers/task.controllers')
const express =require('express')


const getAll = (req,res) => {
    const data = verTodasLasTareas()
    res.status(200).json({
        item:data.length,
        response:data
    }
    )
}

const getById= (req,res) =>{
    const id = Number(req.params.id)
    if(id){
    const data = verTareaPorId(id)
    if (data.id) {
        res.status(200).json(data)
    }else{
        res.status(400).json({message:'Id invalid'})
    }}else{
    res.status(400).json({message:'Id not a number'})
}}

const createTask=(req,res)=>{
    const taskObj= req.body
    

    if(taskObj){
        const data = crearTarea(taskObj)
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"User invalid"})
        }
    }else{
        res.status(400).json({message:'No users'})
    }
}


const deleteTask= (req,res) =>{
    const id =Number(req.params.id)
    const data=borrarTarea(id)

    if (data) {
        res.status(204).json()
    }else{
        res.status(400).json({message:'Invalid id'})}
}

const actualityTask=(req,res)=>{
    const id = Number(req.params.id)
    const taskObj = req.body
    const data = actualizarTarea(id,taskObj)
    if(taskObj){
        res.status(200).json()
    }else{
        res.status(400).json({message:'missing data'})
    }
}



module.exports={
    getAll,
    getById,
    createTask,
    deleteTask,
    actualityTask
}