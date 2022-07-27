import {Router} from 'express'
import {getRolesFunctions, postRolesFunctions, deleteRolesFunctionsById, updateRolesFunctionsById, getRolesFunctionsById} from '../controllers/rolesFunctions.controller.js'

const router = Router()

//GET ALL
router.get('/rolfunctions', getRolesFunctions)

//GET ONE ROL_FUNCTION
router.get('/rolfunctions/:idRolFunction', getRolesFunctionsById)

//CREATE ROL_FUNCTION
router.post('/rolfunctions', postRolesFunctions)

//UPDATE ROL_FUNCTION
router.put('/rolfunctions/:idRolFunction', updateRolesFunctionsById)

//DELETE ROL_FUNCTION
router.delete('/rolfunctions/:idRolFunction', deleteRolesFunctionsById)

export default router