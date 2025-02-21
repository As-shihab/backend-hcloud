// const mongoose = require("mongoose")
// require('dotenv').config();
// const DB = mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOATPASS}@cluster0.ipv4i12.mongodb.net/shihab`)
// .then(res=>{
//     console.log('Mongodb Connected'+res)
// })
// .catch((err)=>{
//     console.log("Somthing went error to connect  db  " + err.message)
// })

// module.exports = DB;
import mysql from "mysql2";
export default class Database {
  constructor() {}
  Mysql(): any {
  const http =  mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.DBPORT),
    });

    return http;
  }
}
