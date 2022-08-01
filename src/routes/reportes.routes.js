import {Router} from 'express'
import {query1} from '../controllers/reportes.controller.js'
//import {veificarToken} from '../middleware/auth.js'

    const router = Router()

    //// ROLES ENDPOINTS////////////////////////////////////
    //GET ALL
    router.get('/reportes/:idRol', query1)


    export default router