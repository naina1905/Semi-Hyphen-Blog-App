const mysql = require('mysql2');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123@naina@19',
    database: 'blog2'
});
mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error connecting "+JSON.stringify(err,indefined,2));
    } else{
        console.log("Connected");
    }
})
module.exports = {mysqlConnection} ;