const dbConn = require('../model/dbConnection');

/* Login page functions... */
/* GET.... */
exports.getLogin = (req, res) => {
    res.render("login", {
      success: req.flash("Success"),
      error: req.flash("Err"),
    });
};

/* POST.... */
exports.login = (req,res)=>{
    try {
        const { emailphno, pwd } = req.body;
        if(isNaN(emailphno)){
                dbConn.query('SELECT * FROM users WHERE Email = ? AND Password = ?',[emailphno , pwd], (error, results) =>{
                console.log(results);
                console.log('Email Address');
                if(results.length > 0 ){
                        var uname=results[0].Fname;
                        req.session.loggedin = true;
                        req.session.user=uname;
                        dbConn.query('SELECT * FROM doctors',(err,docs)=>{
                          if(err) throw err;
                          res.redirect('/dashboard');
                       });
                              
                }
                else{
                    req.flash(
                        "Err",
                        "Invalid Email or Password "
                      );
                      res.redirect("/login");
                  }
                });
            }
            else{
                dbConn.query('SELECT * FROM users WHERE Phno = ? AND Password = ?',[emailphno , pwd], (error, results) =>{
                    console.log(results);
                    console.log('Phone No');
                    if(results.length > 0 ){
                            var uname=results[0].Fname;
                            req.session.loggedin = true;
                            req.session.user=uname;
                            dbConn.query('SELECT * FROM doctors',(err,docs)=>{
                              if(err) throw err;
                              res.redirect('/dashboard');
                            });
                    }
                    else{
                        req.flash(
                            "Err",
                            "Invalid PhoneNo or Password "
                          );
                          res.redirect("/login");
                      }
                    }); 
            }
     } catch (error) {
       console.log(error); 
    }
}