import {Router} from 'express'
import {getFunctions, postFunctions, deleteFunctionsById, updateFunctionsById, getFunctionsById} from '../controllers/functions.controller.js'

const router = Router()

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

export default router