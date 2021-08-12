const dbConn = require('../model/dbConnection');
const { getDate }= require('../model/date');

/* Register page functions... */
/* GET.... */
exports.getRegister = (req, res) => {
        res.render("register", {
          success: req.flash("Success"),
          error: req.flash("Err"),
        });
  };

/* POST.... */  
exports.Create=(req,res) =>{
    const {fName,phno,address,email,pwd} = req.body;
    var file = req.files.photo;
        var photos=file.name;
 
    dbConn.query('SELECT Email FROM users WHERE Email = ?',[email], (error, docs) => {
        
        if(docs.length === 0){
            var CreateOn=getDate();
            var PID=0;
            var PPID;
            var getPid="SELECT COUNT(PID) AS PID FROM users"; // count number of records present in DB..
            dbConn.query(getPid,(err,results)=>{
                if(err) throw err;
                PID=parseInt(results[0].PID)+1;
                PPID="PID " + PID;
                console.log(PPID);
                // Photo saving procedure..   
                if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                   file.mv('public/images/photos/'+file.name, function(err) {
                        if (err) throw err;
       
                        dbConn.query('INSERT INTO users SET ?', {PID:PPID,Fname:fName, Phno:phno, Address:address, Email:email, Password:pwd,Image:photos, CreatedOn:CreateOn}, (err,results)=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                req.flash("Success", "User Added Successfully !!");
                                res.redirect("/register");
                            }
                        }); //End of Insert Block
                    });//End of Photo Storage Block
                } //End of File Type IF statement
            
        });
        }else{
            req.flash(
                "Err",
                "Email already exists !! "
              );
              res.redirect("/register"); 
        }
        
    });
};