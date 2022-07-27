import {getConnection, sql} from '../database/connection.js'

//GET ALL ROLES
export const getRoles = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from ROLES')
        res.json(result.recordsets)
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 };
 
 //CREATE ROL
 export const postRol = async (req, res) => {
     const {name, description, status} = req.body
     
     if (name == null || description == null) {
         return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
     }
     
     try {
         const pool = await getConnection();
         await pool
         .request()
         .input('name', sql.VarChar, name)
         .input('description', sql.VarChar, description)
         .input('status', sql.Int, status)
         .query('INSERT INTO ROLES (name, description, date_created, date_update, status) VALUES (@name, @description, GETDATE(), null, @status)')
 
         
         res.json({msg: "rol agregado exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
 
 //GET ROL BY ID
 export const getRolById = async (req, res) => {
     const {idRol} = req.params
     
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idRol', idRol)
         .query('select * from ROLES where ROLES.idRol = @idRol')
         res.send(result.recordsets[0])
         
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
     
 }
 
 //DELETE ROL BY ID
 export const deleteRolById = async (req, res) => {
     const {idRol} = req.params
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idRol', idRol)
         .query('delete from ROLES where ROLES.idRol = @idRol')
         res.json({msg: 'rol borrado exitosamente'})
     } catch (error) {
             res.status(500)
             res.send(error.message)
         }
     }
 
 //UPDATE ROL BY ID
 export const updateRolById = async (req, res) => {
     const {name, description, status} = req.body
     const {idRol} = req.params
     if (name == null || description == null) {
         return res.status(400).json({msg: 'bad request. Porfavor llene todos los campos'})
     }
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('name', sql.VarChar, name)
         .input('description', sql.VarChar, description)
         .input('status', sql.Int, status)
         .input('idRol', idRol)
         .query('UPDATE ROLES SET [name] = @name, [description] = @description, [date_update] = GETDATE(), [status] = @status where ROLES.idRol = @idRol')
         res.json({msg: "rol actualizado exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }