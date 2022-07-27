import {getConnection, sql} from '../database/connection.js'

//GET ALL USERS_ROLES
export const getUserRol = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from USERS_ROLES')
        res.json(result.recordsets)
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 };
 
 //CREATE USERS_ROLES
 export const postUserRol = async (req, res) => {
     const {idUser, idRol, status} = req.body
     
     if (idUser == null || idRol == null) {
         return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
     }
     
     try {
         const pool = await getConnection();
         await pool
         .request()
         .input('idUser', sql.Int, idUser)
         .input('idRol', sql.Int, idRol)
         .input('status', sql.Int, status)
         .query('INSERT INTO USERS_ROLES (idUser, idRol, date_created, date_update, status) VALUES (@idUser, @idRol, GETDATE(), null, @status)')

         res.json({msg: "users_roles agregado exitosamente"})

     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
 
 //GET USERS_ROLES BY ID
 export const getUserRolById = async (req, res) => {
     const {idUserRol} = req.params
     
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idUserRol', idUserRol)
         .query('select * from USERS_ROLES where USERS_ROLES.idUserRol = @idUserRol')
         res.send(result.recordsets[0])
         
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
     
 }
 
 //DELETE USERS_ROLES BY ID
 export const deleteUserRolById = async (req, res) => {
     const {idUserRol} = req.params
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idUserRol', idUserRol)
         .query('delete from USERS_ROLES where USERS_ROLES.idUserRol = @idUserRol')
         res.json({msg: 'users_rol borrado exitosamente'})
     } catch (error) {
             res.status(500)
             res.send(error.message)
         }
     }
 
 //UPDATE USERS_ROLES BY ID
 export const updateUserRolById = async (req, res) => {
    const {idUser, idRol, status} = req.body
    const {idUserRol} = req.params
    if (idUser == null || idRol == null || idUserRol == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idUser', sql.Int, idUser)
         .input('idRol', sql.Int, idRol)
         .input('status', sql.Int, status)
         .input('idUserRol', sql.Int, idUserRol)
         .query('UPDATE USERS_ROLES SET [idUser] = @idUser, [idRol] = @idRol, [date_update] = GETDATE(), [status] = @status where USERS_ROLES.idUserRol = @idUserRol')
         res.json({msg: "users_roles actualizado exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
