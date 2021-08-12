const dbConn = require('../model/dbConnection');

exports.getDashboard = (req,res)=>{
    // limit as 10
    const limit = 10
    // page number
    const page = req.query.page || 1;
    // calculate offset
    const offset = (page - 1) * limit;
    // query for fetching data with page number and offset
     const dctrsQuery = "select * from doctors limit "+limit+" OFFSET "+offset;
     dbConn.query(dctrsQuery,(err,docs)=>{
        if(err) throw err;
        res.status(200).render('dashboard',{User_logIn:req.session.user, doctors:docs, pages: docs.length,current: page});
     });
};

exports.dashboardSearch = (req,res)=>{
  var fltrCate = req.body.cate;
  var fltrFee = req.body.fee;
  // limit as 10
  const limit = 10
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  var searchQuery = "SELECT * FROM doctors WHERE Dcategory = ? OR Fees = ? limit "+limit+" OFFSET "+offset;
  dbConn.query(searchQuery,[fltrCate,fltrFee],(error,results)=>{
      if(error) throw error;
      res.status(200).render('dashboard',{User_logIn:req.session.user, doctors:results, pages: results.length,current: page});
  })
}