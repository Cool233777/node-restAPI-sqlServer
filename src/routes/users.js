import {Router} from 'express'
import {getUserById, getUsers, postUser, deleteUserById, updateUserById} from '../controllers/users.controller.js'

const router = Router()




//GET ALL
router.get('/users', getUsers)

//GET ONE USER
router.get('/users/:idUser', getUserById)

//CREATE USER
router.post('/users', postUser)

//UPDATE USER
router.put('/users/:idUser', updateUserById)

//DELETE USER
router.delete('/users/:idUser', deleteUserById)


export default router