const mysql = require('mysql')

const Mysql = mysql.createConnection({
    host:process.env.M_HOST ,
    user: process.env.M_USER,
    password: process.env.M_PASSWORD,
    database: process.env.M_DATABASE
})

Mysql.connect((err)=>{
    if(err) console.log("MYSQL not connected "+ err.message)

        console.log("Mysql connected Id = "+Mysql.threadId)
})
module.exports = Mysql