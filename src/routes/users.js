import {Router} from 'express'
import {getUsers, postUser} from '../controllers/users.controller.js'

const router = Router()




//GET ALL
router.get('/users', getUsers)

//GET ONE USER
router.get('/users',)

//CREATE USER
router.post('/users', postUser)

//UPDATE USER
router.put('/users',)

//DELETE USER
router.delete('/users',)


export default router