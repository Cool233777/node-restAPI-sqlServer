import express from 'express'
import config from './config.js'

import usersRoutes from './routes/users.routes.js'
import rolesRoutes from './routes/roles.routes.js'
import functionsRoutes from './routes/functions.routes.js'
import rolesFunctionsRoutes from './routes/rolesFunctions.routes.js'
import usersRolesRoutes from './routes/usersRoles.routes.js'
import authRoutes from './routes/token.routes.js'
import reportesRoutes from './routes/reportes.routes.js'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());//para recibir en formato json
app.use(express.urlencoded({extended: false}))//recibir desde el html

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//llamado al controllador de las tablas
app.use(usersRoutes)
app.use(rolesRoutes)
app.use(functionsRoutes)
app.use(rolesFunctionsRoutes)
app.use(usersRolesRoutes)
app.use(authRoutes)
app.use(reportesRoutes)

export default app