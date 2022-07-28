import {Router} from 'express'
import {getUserById, getUsers, postUser, deleteUserById, updateUserById, } from '../controllers/users.controllers.js'
import {veificarToken} from '../middleware/auth.js'

const router = Router()

//// USERS ENDPOINTS////////////////////////////////////
//GET ALL
router.get('/users', veificarToken, getUsers)

//GET ONE USER
router.get('/users/:idUser', veificarToken, getUserById)

//CREATE USER
router.post('/users', veificarToken, postUser)

//UPDATE USER
router.put('/users/:idUser', veificarToken, updateUserById)

//DELETE USER
router.delete('/users/:idUser', veificarToken, deleteUserById)

export default router