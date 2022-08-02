import {getConnection, sql} from '../database/connection.js'

//GET ALL ROLES_FUNCTIONS
export const getRolesFunctions = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from ROLES_FUNCTIONS')
        res.json(result.recordsets)
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 };
 
 //CREATE ROLES_FUNCTIONS
 export const postRolesFunctions = async (req, res) => {
     const {idRol, idFunction, status} = req.body
     
     if (idRol == null || idFunction == null) {
         return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
     }
     
     try {
         const pool = await getConnection();
         await pool
         .request()
         .input('idRol', sql.Int, idRol)
         .input('idFunction', sql.Int, idFunction)
         .input('status', sql.Int, status)
         .query('INSERT INTO ROLES_FUNCTIONS (idRol, idFunction, date_created, date_update, status) VALUES (@idRol, @idFunction, GETDATE(), null, @status)')

         res.json({msg: "roles_funciones agregada exitosamente"})

     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
 
 //GET ROLES_FUNCTIONS BY ID
 export const getRolesFunctionsById = async (req, res) => {
     const {idRolFunction} = req.params
     
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idRolFunction', idRolFunction)
         .query('select * from ROLES_FUNCTIONS where ROLES_FUNCTIONS.idRolFunction = @idRolFunction')
         res.send(result.recordsets[0])
         
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
     
 }
 
 //DELETE ROLES_FUNCTIONS BY ID
 export const deleteRolesFunctionsById = async (req, res) => {
     const {idRolFunction} = req.params
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idRolFunction', idRolFunction)
         .query('delete from ROLES_FUNCTIONS where ROLES_FUNCTIONS.idRolFunction = @idRolFunction')
         res.json({msg: 'rol_funcion borrado exitosamente'})
     } catch (error) {
             res.status(500)
             res.send(error.message)
         }
     }
 
 //UPDATE ROLES_FUNCTIONS BY ID
 export const updateRolesFunctionsById = async (req, res) => {
    const {idRol, idFunction, status} = req.body
    const {idRolFunction} = req.params
    if (idRol == null || idFunction == null) {
        return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
    }
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idRol', sql.Int, idRol)
         .input('idFunction', sql.Int, idFunction)
         .input('status', sql.Int, status)
         .input('idRolFunction', sql.Int, idRolFunction)
         .query('UPDATE ROLES_FUNCTIONS SET [idRol] = @idRol, [idFunction] = @idFunction, [date_update] = GETDATE(), [status] = @status where ROLES_FUNCTIONS.idRolFunction = @idRolFunction')
         res.json({msg: "rol_funcion actualizada exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
