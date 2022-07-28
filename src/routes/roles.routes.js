import {Router} from 'express'
import {getRoles, postRol, deleteRolById, updateRolById, getRolById} from '../controllers/roles.controller.js'
import {veificarToken} from '../middleware/auth.js'

    const router = Router()

    //// ROLES ENDPOINTS////////////////////////////////////
    //GET ALL
    router.get('/roles', veificarToken, getRoles)
    
    //GET ONE ROL
    router.get('/roles/:idRol', veificarToken, getRolById)
    
    //CREATE ROL
    router.post('/roles', veificarToken, postRol)
    
    //UPDATE ROL
    router.put('/roles/:idRol', veificarToken, updateRolById)
    
    //DELETE ROL
    router.delete('/roles/:idRol', veificarToken, deleteRolById)

    export default router