import {Router} from 'express'
import {getFunctions, postFunctions, deleteFunctionsById, updateFunctionsById, getFunctionsById} from '../controllers/functions.controller.js'
import {veificarToken} from '../middleware/auth.js'

const router = Router()

//GET ALL
router.get('/functions', veificarToken, getFunctions)

//GET ONE ROL
router.get('/functions/:idFunction', veificarToken, getFunctionsById)

//CREATE ROL
router.post('/functions', veificarToken, postFunctions)

//UPDATE ROL
router.put('/functions/:idFunction', veificarToken, updateFunctionsById)

//DELETE ROL
router.delete('/functions/:idFunction', veificarToken, deleteFunctionsById)

export default router