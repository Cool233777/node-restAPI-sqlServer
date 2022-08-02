import {Router} from 'express'
import {getRoles, postRol, deleteRolById, updateRolById, getRolById} from '../controllers/roles.controller.js'
import {veificarToken} from '../middleware/auth.js'

    const router = Router()

    //// ROLES ENDPOINTS////////////////////////////////////
    //GET ALL
    //router.get('/roles', veificarToken, getRoles)
    router.get('/roles', getRoles)
    
    //GET ONE ROL
    //router.get('/roles/:idRol', veificarToken, getRolById)
    router.get('/roles/:idRol', getRolById)
    
    //CREATE ROL
    //router.post('/roles', veificarToken, postRol)
    router.post('/roles', postRol)
    
    //UPDATE ROL
   // router.put('/roles/:idRol', veificarToken, updateRolById)
    router.put('/roles/:idRol', updateRolById)
    
    //DELETE ROL
   // router.delete('/roles/:idRol', veificarToken, deleteRolById)
    router.delete('/roles/:idRol', deleteRolById)

    export default router