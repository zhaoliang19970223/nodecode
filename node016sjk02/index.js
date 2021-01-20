const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demhem'
});
connection.connect();

let data ={
    name:'小王',
    age:'12',
    money:'11111'
}
connection.query('insert into student SET ?',data,(error,result) => {
    if(error){
        console.log(error);
    }
    if(result.affectedRows == 1){
        console.log('成功')
    }
    console.log('The solution is:',result);
});

connection.end();