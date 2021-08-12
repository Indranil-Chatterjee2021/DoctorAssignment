const express = require('express');
const router = express.Router();
const regController = require("../controllers/register");
const loginController = require("../controllers/login");
const dashboardController = require("../controllers/dashboard");
const passwordController = require("../controllers/password");

/* GET HOME PAGE */
router.get('/',(req,res)=>{
    res.render('home');
});
/* GET REGISTER PAGE */
router.get('/register', regController.getRegister);
/* POST REGISTER PAGE */
router.post("/register/add", regController.Create);

/* GET LOGIN PAGE */
router.get('/login', loginController.getLogin);
/* POST LOGIN PAGE */
router.post("/login",loginController.login);

/* GET DASHBOARD PAGE */
router.get('/dashboard',dashboardController.getDashboard);

router.post('/dashboard/search',dashboardController.dashboardSearch);

router.get('/changepassword', passwordController.getPwd);

router.post('/changepassword',passwordController.changePwd);

//LogOut...
router.get('/logout', (req,res) => {
    req.session.loggedin = false;
    req.session = null;
    res.redirect('/');
});

module.exports=router;