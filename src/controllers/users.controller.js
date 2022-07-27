import {getConnection, sql} from '../database/connection.js'

/* 
    PASOS PARA HACER EL READ_ALL
    1. Llamar la conexion, retorna un pool, es a quien pedimos las consultas.
    2. Hacer la consulta lleva tiempo, por lo que se utiliza un await y retorna el resultado de la consulta.
*/
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from USERS')
        res.json(result.recordsets)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const postUser = async (req, res) => {
    const {username, firstName, lastName, date_created, date_update, status} = req.body

    if (username == null || firstName == null || date_created == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }

    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('firstName', sql.VarChar, firstName)
        .input('lastName', sql.VarChar, lastName)
        .input('date_created', sql.DateTime, date_created)
        .input('date_update', sql.DateTime, date_update)
        .input('status', sql.Int, status)
        .query('INSERT INTO USERS (username, firstName, lastName, date_created, date_update, status) VALUES (@username, @firstName, @lastName, @date_created, @date_update, @status)')

        console.log('Usuario agregado exitosamente')

        res.json({username, firstName, lastName, date_created, date_update, status})
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
}

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

export const deleteUserById = async (req, res) => {
    const {idUser} = req.params
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('idUser', idUser)
        .query('delete from USERS where USERS.idUser = @idUser')
        res.sendStatus(204)
    } catch (error) {
            res.status(500)
            res.send(error.message)
    }
}

export const updateUserById = async (req, res) => {
    const {username, firstName, lastName, date_created, date_update, status} = req.body
    const {idUser} = req.params
    if (username == null || firstName == null || date_created == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('firstName', sql.VarChar, firstName)
        .input('lastName', sql.VarChar, lastName)
        .input('date_created', sql.DateTime, date_created)
        .input('date_update', sql.DateTime, date_update)
        .input('status', sql.Int, status)
        .input('idUser', idUser)
        .query('UPDATE USERS SET [username] = @username, [firstName] = @firstName, [lastName] = @lastName, [date_created] = @date_created, [date_update] = @date_update, [status] = @status where USERS.idUser = @idUser')
        res.json({username, firstName, lastName, date_created, date_update, status})
    } catch (error) {
            res.status(500)
            res.send(error.message)
    }
}