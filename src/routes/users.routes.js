import {Router} from 'express'
import {getUserById, getUsers, postUser, deleteUserById, updateUserById, } from '../controllers/users.controllers.js'
import {veificarToken} from '../middleware/auth.js'

const router = Router()

//// USERS ENDPOINTS////////////////////////////////////
//GET ALL
//router.get('/users', veificarToken, getUsers)
router.get('/users', getUsers)

//GET ONE USER
//router.get('/users/:idUser', veificarToken, getUserById)
router.get('/users/:idUser', getUserById)

//CREATE USER
//router.post('/users', veificarToken, postUser)
router.post('/users', postUser)

//UPDATE USER
//router.put('/users/:idUser', veificarToken, updateUserById)
router.put('/users/:idUser', updateUserById)

//DELETE USER
//router.delete('/users/:idUser', veificarToken, deleteUserById)
router.delete('/users/:idUser', deleteUserById)

export default router