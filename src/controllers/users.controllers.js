import {getConnection, sql} from '../database/connection.js'

//GET ALL USERS
export const getUsers = async (req, res) => {
    /* 
    PASOS PARA HACER EL READ_ALL
    1. Llamar la conexion, retorna un pool, es a quien pedimos las consultas.
    2. Hacer la consulta lleva tiempo, por lo que se utiliza un await y retorna el resultado de la consulta.
    */
   try {
       const pool = await getConnection()
       const result = await pool.request().query('select * from USERS')
       res.json(result.recordsets)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

//CREATE USERS
export const postUser = async (req, res) => {
    const {username, firstName, lastName, status} = req.body
    
    if (username == null || firstName == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }
    
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('firstName', sql.VarChar, firstName)
        .input('lastName', sql.VarChar, lastName)
        .input('status', sql.Int, status)
        .query('INSERT INTO USERS (username, firstName, lastName, date_created, date_update, status) VALUES (@username, @firstName, @lastName, GETDATE(), null, @status)')
        
        res.json({msg: "usuario agregado exitosamente"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//GET USER BY ID
export const getUserById = async (req, res) => {
    const {idUser} = req.params
    
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('idUser', idUser)
        .query('select * from USERS where USERS.idUser = @idUser')
        res.send(result.recordsets[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

//DELETE USER BY ID
export const deleteUserById = async (req, res) => {
    const {idUser} = req.params
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('idUser', idUser)
        .query('delete from USERS where USERS.idUser = @idUser')
        res.json({msg: 'usuario borrado exitosamente'})
    } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

//UPDATE USER BY ID
export const updateUserById = async (req, res) => {
    const {username, firstName, lastName, status} = req.body
    const {idUser} = req.params
    if (username == null || firstName == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('firstName', sql.VarChar, firstName)
        .input('lastName', sql.VarChar, lastName)
        .input('status', sql.Int, status)
        .input('idUser', idUser)
        .query('UPDATE USERS SET [username] = @username, [firstName] = @firstName, [lastName] = @lastName, [date_update] = GETDATE(), [status] = @status where USERS.idUser = @idUser')
        res.json({msg: "usuario actualizado exitosamente"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}