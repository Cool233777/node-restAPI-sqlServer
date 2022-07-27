import sql from 'mssql'

//database configuration
const dbSettings = {
    user: 'admin',
    password: 'admin',
    server: 'localhost',
    database: 'Prueba2BDG',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    
    try {
        //connect to database

        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }
}
console.log('database connected!')
export {sql};//lo exporto para que otros modulos lo utilicen