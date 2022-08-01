import {getConnection, sql} from '../database/connection.js'

//query 1
export const query1 = async (req, res) => {
    const {idRol} = req.params
    
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('idRol', idRol)
        .query('exec sp_users_by_rol @idRol;')
        res.send(result.recordsets[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}