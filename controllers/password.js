const dbConn=require('../model/dbConnection');

exports.getPwd=(req,res)=>{
    res.render('changePassword',{User_logIn:req.session.user, success: req.flash("Success"),
    error: req.flash("Err")});
};

/* Change password page functions... */
exports.changePwd=(req,res) =>{
    try {
        const { emailphno, pwd } = req.body;
        
            if(isNaN(emailphno)){
                dbConn.query('SELECT * FROM users WHERE Email = ?',[emailphno], (error, results) =>{
                if(results.length > 0 ){
                    var updpwd='UPDATE users SET Password=? WHERE Email=?';
                    dbConn.query(updpwd,[pwd,emailphno],(err,response)=>{
                        if(err) throw err;
                        req.flash("Success", "Password Changed Successfully !!");
                                res.redirect("/changePassword");
    
                    })
                }
                else{
                    req.flash(
                        "Err",
                        "Invalid Email/Phone No !! "
                      );
                      res.redirect("/changePassword"); 
                    }
                })
            }
            else{
                dbConn.query('SELECT * FROM users WHERE Phno = ?',[emailphno], (error, results) =>{
                    if(results.length > 0 ){
                        var updpwd='UPDATE users SET Password=? WHERE Phno=?';
                        dbConn.query(updpwd,[pwd,emailphno],(err,response)=>{
                            if(err) throw err;
                            req.flash("Success", "Password Changed Successfully !!");
                            res.redirect("/changePassword");
                        })
                    }
                    else{
                        req.flash(
                            "Err",
                            "Invalid Email/Phone No !! "
                          );
                          res.redirect("/changePassword");
                        }
                    }) 
            }
        
    } catch (error) {
       console.log(error); 
    }
};