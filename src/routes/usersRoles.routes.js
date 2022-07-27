import {Router} from 'express'
import {getUserRol, postUserRol, deleteUserRolById, updateUserRolById, getUserRolById,} from '../controllers/usersRoles.controller.js'

const router = Router()

//GET ALL
router.get('/usersrol', getUserRol)

//GET ONE USERS_ROLES
router.get('/usersrol/:idUserRol', getUserRolById)

//CREATE USERS_ROLES
router.post('/usersrol', postUserRol)

//UPDATE USERS_ROLES
router.put('/usersrol/:idUserRol', updateUserRolById)

//DELETE USERS_ROLES
router.delete('/usersrol/:idUserRol', deleteUserRolById)


export default router