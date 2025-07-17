import mysql from "mysql2"

// Cargar fichero con los datos de acceso 
process.loadEnvFile()

// Configurar la conexión
const configConnection = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    port: process.env.DB_PORT,
    database : process.env.DB_NAME
}

// Exportamos la conexión:
export const connection = mysql.createConnection(configConnection)
