const router= require('express').Router()
const {getAll,getById,createTask,deleteTask,actualityTask} = require('./task.http')



router.route('/task')
.get(getAll)
.post(createTask)

router.route('/task/:id')
.get(getById)
.put(actualityTask)
.delete(deleteTask)

module.exports={
    router
}