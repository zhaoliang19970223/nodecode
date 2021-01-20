exports.query = (sql,data=null,cb) => {

    const mysql = require('mysql');

    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'demhem'
    });
    connection.connect();

    connection.query(sql,data,(error,results) => {
        if(error){
            cb(error);
            return;
        }
        cb(null,results);
    });
    connection.end();    
}