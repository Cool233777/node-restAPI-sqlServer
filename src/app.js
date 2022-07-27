import express from 'express'
import config from './config.js'

import usersController from './routes/tablesRoutes.js'

const app = express()

let port
//settings
app.set('port', config.port)

//middlewares
app.use(express.json());//para recibir en formato json
app.use(express.urlencoded({extended: false}))//recibir desde el html

//llamado al controllador de las tablas
app.use(usersController)

export default app