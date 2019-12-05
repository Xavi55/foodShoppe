const mysql = require('mysql')

const { URI, USER, PASS } = require('../config.json')

const db = mysql.createPool({
    connectionLimit : 10,
    host     : URI,
    user     : USER,
    password : PASS,
    database : 'foodshoppe'
    });

db.getConnection((err,conn)=>
{
    if(err)
    {
        console.log(`Connection Error:\n${err}`)
    }
    else
    {
        console.log(`MySQL OKAY`)
    }
})

module.exports = db