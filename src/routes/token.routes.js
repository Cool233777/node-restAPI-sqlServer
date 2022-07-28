import {Router} from 'express'

import {veificarToken, generarToken} from '../middleware/auth.js'


const router = Router()

router.post('/generarToken', generarToken, (req, res)=>{
    //res.status(200).send('hola mundo')
})

router.get('/generarToken', generarToken, (req, res)=>{
    //res.status(200).send('hola mundo')
})

export default router