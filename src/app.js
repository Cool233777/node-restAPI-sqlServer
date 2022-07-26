import express from 'express'
import config from './config.js'

import usersController from './routes/users.js'

const app = express()

let port
//settings
app.set('port', config.port)


app.use(usersController)

export default app