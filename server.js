const express = require('express');
var fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');
const flash = require("req-flash");
const PORT = 5000;
const bodyParser = require('body-parser');

const app = express();
app.use(
    session({
      secret: "djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy",
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(flash());

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true}));

// set view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));
app.use(fileUpload());

app.use('/',require('./routers/pageRouters'));


app.listen(PORT,(err)=>{
    if(err)
    console.log("Unable to Start Server..");
    else
    console.log("Server Started Successfully at Port : " + PORT);
})