import {getConnection} from '../database/connection.js'


/* 
    PASOS PARA HACER EL READ_ALL
    1. Llamar la conexion, retorna un pool, es a quien pedimos las consultas.
    2. Hacer la consulta lleva tiempo, por lo que se utiliza un await y retorna el resultado de la consulta.
*/
export const getUsers = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('select * from USERS')
    console.log(result)
    res.json(result.recordsets)
};

export const postUser = async (req, res) => {
    const {name, description} = req.body
    console.log(name, description)
    res.json('nuevo usuario')
}