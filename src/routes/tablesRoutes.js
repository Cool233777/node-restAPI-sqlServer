import {Router} from 'express'
import {getUserById, getUsers, postUser, deleteUserById, updateUserById, getRoles, postRol, deleteRolById, updateRolById, getRolById, getFunctions, postFunctions, deleteFunctionsById, updateFunctionsById, getFunctionsById} from '../controllers/users.controller.js'

const router = Router()



//// USERS ENDPOINTS////////////////////////////////////
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


//// ROLES ENDPOINTS////////////////////////////////////
//GET ALL
router.get('/roles', getRoles)

//GET ONE ROL
router.get('/roles/:idRol', getRolById)

//CREATE ROL
router.post('/roles', postRol)

//UPDATE ROL
router.put('/roles/:idRol', updateRolById)

//DELETE ROL
router.delete('/roles/:idRol', deleteRolById)


//// FUNCTIONS ENDPOINTS////////////////////////////////////
//GET ALL
router.get('/functions', getFunctions)

//GET ONE ROL
router.get('/functions/:idFunction', getFunctionsById)

//CREATE ROL
router.post('/functions', postFunctions)

//UPDATE ROL
router.put('/functions/:idFunction', updateFunctionsById)

//DELETE ROL
router.delete('/functions/:idFunction', deleteFunctionsById)


//// ROLES_FUNCTIONS ENDPOINTS////////////////////////////////////
//GET ALL
router.get('/functions', getFunctions)

//GET ONE ROL_FUNCTION
router.get('/functions/:idFunction', getFunctionsById)

//CREATE ROL_FUNCTION
router.post('/functions', postFunctions)

//UPDATE ROL_FUNCTION
router.put('/functions/:idFunction', updateFunctionsById)

//DELETE ROL_FUNCTION
router.delete('/functions/:idFunction', deleteFunctionsById)


export default router