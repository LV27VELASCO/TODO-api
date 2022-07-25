const router= require('express').Router()
const {getAll,getById,createUser,deleteUser,actualityUsers} = require('./users.http')



router.route('/task')
.get(getAll)
.post(createUser)

router.route('/task/:id')
.get(getById)
.put(actualityUsers)
.delete(deleteUser)

module.exports={
    router
}