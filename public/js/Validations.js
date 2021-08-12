// Used for Registered Page Validation Purpose ...
function validateRegForm() {
    var email = document.forms["form1"]["email"].value;
    var fname = document.forms["form1"]["fname"].value;
    var password = document.forms["form1"]["pwd"].value;
    var phno = document.forms["form1"]["phno"].value;
    var address = document.forms["form1"]["address"].value;
    //var pwd = document.getElementById("pwd").value;
    
  
    var NameregEx = /^[a-zA-Z\s]*$/;
    var EmailregEx = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
    var PhoneRegEx = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/;
    var addRegEx = /^[a-zA-Z0-9\s,.-]{3,}$/;
    var pwdRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (email == "") {
      alert("Email is required !!");
      document.forms["form1"]["email"].focus();
      return false;
    }else if(!PhoneRegEx.test(phno)){
        alert("Phone No must be start with 6,7,8,9 Min 10 digits !!");
        document.forms["form1"]["phno"].focus();
        return false;
    }else if(phno == ""){
        alert("Phone No is required !!");
        document.forms["form1"]["phno"].focus();
        return false;
    }else if(address == ""){
        alert("Address is required !!");
        document.forms["form1"]["address"].focus();
        return false;
    }else if(!addRegEx.test(address)){
        alert("Please enter valid address");
        document.forms["form1"]["address"].focus();
        return false;
    } 
    else if (!EmailregEx.test(email)) {
      alert("Invalid Email Address !!");
      document.forms["form1"]["email"].focus();
      return false;
    } else if (fname == "") {
      alert("Full Name is required !!");
      document.forms["form1"]["fname"].focus();
      return false;
    } else if (!NameregEx.test(fname)) {
      alert("Only Characters with white space are allowed !!");
      document.forms["form1"]["fname"].focus();
      return false;
    } else if (password == "") {
      alert("Password is required !!");
      document.forms["form1"]["pwd"].focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must contains 8 chars long !!");
      document.forms["form1"]["pwd"].focus();
      return false;
    } else {
      return true;
    }
  }

  // Used for Forget Password Validation Purpose ...
function validateChangePwdForm() {
    var emailphno = document.forms["form2"]["emailphno"].value;
    var password = document.forms["form2"]["pwd"].value;
    var cnfpwd = document.forms["form2"]["rpwd"].value;
  
    if (emailphno == "") {
      alert("Enter your registered email address or phone no !!");
      document.forms["form2"]["emailphno"].focus();
      return false;
    } else if (password == "") {
      alert("Password is required !!");
      document.forms["form2"]["pwd"].focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must contains 8 chars long !!");
      document.forms["form2"]["pwd"].focus();
      return false;
    } else if (cnfpwd == "") {
      alert("Confirm Password is required !!");
      document.forms["form2"]["rpwd"].focus();
      return false;
    } else {
      return true;
    }
  }