import jwt from 'jsonwebtoken';
import {postUser} from '../controllers/users.controllers.js'
const config = process.env;

export const veificarToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        res.status(403).send('token requerido para autenticacion')
    }
    
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        //req.user = decoded
    } catch (error) {
        return res.status(401).send('invalid token')
    }
    return next();
}


export const generarToken = (req, res, next) => {

    const token = jwt.sign(
        {id: 'admin'},
        'admin',
            {
                expiresIn: "2h",
            }
        )
    res.status(201).json({msg: token})
} 
