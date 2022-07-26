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


async function getConnection() {
    
    try {
        //connect to database
        const pool = await sql.connect(dbSettings)
        console.log('database connected')
        return pool
    console.log(result)
    } catch (error) {
        console.error(error)
    }
}

getConnection()