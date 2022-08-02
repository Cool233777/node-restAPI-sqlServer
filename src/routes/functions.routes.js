import {Router} from 'express'
import {getFunctions, postFunctions, deleteFunctionsById, updateFunctionsById, getFunctionsById} from '../controllers/functions.controller.js'
import {veificarToken} from '../middleware/auth.js'

const router = Router()

//GET ALL
//router.get('/functions', veificarToken, getFunctions)
router.get('/functions', getFunctions)

//GET ONE ROL
//router.get('/functions/:idFunction', veificarToken, getFunctionsById)
router.get('/functions/:idFunction', getFunctionsById)

//CREATE ROL
//router.post('/functions', veificarToken, postFunctions)
router.post('/functions', postFunctions)

//UPDATE ROL
//router.put('/functions/:idFunction', veificarToken, updateFunctionsById)
router.put('/functions/:idFunction', updateFunctionsById)

//DELETE ROL
//router.delete('/functions/:idFunction', veificarToken, deleteFunctionsById)
router.delete('/functions/:idFunction', deleteFunctionsById)

export default router