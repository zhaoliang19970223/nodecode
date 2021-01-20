const db = require('./db');

db.query('SELECT * FROM student',null,(error,result) => {
    if(error){
        console.log(error);
        console.log('出错了');
        return;
    }
    console.log(result);
})

