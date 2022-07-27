import {getConnection, sql} from '../database/connection.js'

//GET ALL FUNCTIONS
export const getFunctions = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from FUNCTIONS')
        res.json(result.recordsets)
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 };
 
 //CREATE FUNCTIONS
 export const postFunctions = async (req, res) => {
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
         .query('INSERT INTO FUNCTIONS (name, description, date_created, date_update, status) VALUES (@name, @description, GETDATE(), null, @status)')
         
         res.json({msg: "funcion agregada exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }
 
 //GET FUNCTIONS BY ID
 export const getFunctionsById = async (req, res) => {
     const {idFunction} = req.params
     
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idFunction', idFunction)
         .query('select * from FUNCTIONS where FUNCTIONS.idFunction = @idFunction')
         res.send(result.recordsets[0])
         
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
     
 }
 
 //DELETE FUNCTIONS BY ID
 export const deleteFunctionsById = async (req, res) => {
     const {idFunction} = req.params
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idFunction', idFunction)
         .query('delete from FUNCTIONS where FUNCTIONS.idFunction = @idFunction')
         res.json({msg: 'funcion borrada exitosamente'})
     } catch (error) {
             res.status(500)
             res.send(error.message)
         }
     }
 
 //UPDATE FUNCTIONS BY ID
 export const updateFunctionsById = async (req, res) => {
     const {name, description, status} = req.body
     const {idFunction} = req.params
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
         .input('idFunction', idFunction)
         .query('UPDATE FUNCTIONS SET [name] = @name, [description] = @description, [date_update] = GETDATE(), [status] = @status where FUNCTIONS.idFunction = @idFunction')
         res.json({msg: "funcion actualizada exitosamente"})
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 }