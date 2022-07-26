import express from 'express'
import config from './config.js'

const app = express()

let port
//settings
app.set('port', config.port)


export default app