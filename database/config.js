require('dotenv').config();

module.exports = {
    username: process.env.DBUSER ,
    password: process.env.DBPASS,
    dialect: process.env.DBDIALECT,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME 
}