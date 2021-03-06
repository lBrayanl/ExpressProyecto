const mysql= require('mysql');
const {promisify}= require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{

    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSE');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('\n  ACTIVAR EL XAMPP --- BASE DE DATOS NO CONECTADA\n');
        }
    }
    if(connection) 
    {connection.release();
    console.log('\n BASE DE DATOS CONECTADA\n');
    }
    return;
});
pool.query = promisify(pool.query);
module.exports=pool;