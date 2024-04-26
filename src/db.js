const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.DB_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
});

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao Banco de Dados: ${process.env.BD_NAME}`)
});

module.exports = connection;