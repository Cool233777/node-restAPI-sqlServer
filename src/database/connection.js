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
        console.log('database connected!')
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }
}
