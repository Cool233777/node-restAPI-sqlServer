import {Router} from 'express'
import {getRoles, postRol, deleteRolById, updateRolById, getRolById} from '../controllers/roles.controller.js'


    const router = Router()

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

    export default router