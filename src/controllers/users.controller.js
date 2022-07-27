import {getConnection, sql} from '../database/connection.js'


////////// CRUD DE USUARIOS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        res.sendStatus(204)
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// CRUD DE ROLES /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        res.sendStatus(204)//el 204 es para retornar que todo bien
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// CRUD DE FUNCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
         res.sendStatus(204)//el 204 es para retornar que todo bien
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// CRUD DE ROLES_FUNCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GET ALL ROLES_FUNCTIONS
export const getRolesFunctions = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from FUNCTIONS')
        res.json(result.recordsets)
     } catch (error) {
         res.status(500)
         res.send(error.message)
     }
 };
 
 //CREATE ROLES_FUNCTIONS
 export const postRolesFunctions = async (req, res) => {
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
 
 //GET ROLES_FUNCTIONS BY ID
 export const getRolesFunctionsById = async (req, res) => {
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
 
 //DELETE ROLES_FUNCTIONS BY ID
 export const deleteRolesFunctionsById = async (req, res) => {
     const {idFunction} = req.params
     try {
         const pool = await getConnection()
         const result = await pool
         .request()
         .input('idFunction', idFunction)
         .query('delete from FUNCTIONS where FUNCTIONS.idFunction = @idFunction')
         res.sendStatus(204)//el 204 es para retornar que todo bien
     } catch (error) {
             res.status(500)
             res.send(error.message)
         }
     }
 
 //UPDATE ROLES_FUNCTIONS BY ID
 export const updateRolesFunctionsById = async (req, res) => {
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////