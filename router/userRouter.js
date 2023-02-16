const express = require("express");

const router = express.Router();


router.post("/register", (req,res,next)=>{
  //findUser
  //if the user exists-return a response that says email exists, try logging in
  //else - no user exists
  //then encrpyt the password
  //set the password with the encrypted password
  //save the user to the database


});

router.post("/login", (req,res)=>{

});


module.exports = router;