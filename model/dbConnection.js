var mySql = require('mysql');
var Conn = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "indranil",
    database: "ocms"
});
Conn.connect((err)=>{
  if(err) throw err;
  console.log("Connected to MySql Database OCMS ");
});
module.exports=Conn;