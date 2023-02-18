const express = require("express");
const {saveUser, findUser} = require('../db/db')
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const mongoose = require("mongoose");


router.post('/register', (req,res,next)=>{
  //findUser
  findUser({email: req.body.email}).then(user =>{
  //check if user exists
  if(user){
    //return response that says Email Exists try logging in
   return res.status(409).json({message: "User exist, try logging in"})
  }
  else{
    //map our req.body to our user model
    const user = new User();
    user._id = mongoose.Types.ObjectId();
    //returns a new user object with all of the properties
    const newUser = Object.assign(user, req.body);
    //encrypt the password
     bcrypt.hash(newUser.password, 10, (err, hash) => {
      if(err){
        return res.status(501).json({message: "Error: " + err.message})
      }
      else{
        //set the password with the encrypted password
        newUser.password = hash;
        //save the user to the database
       saveUser(newUser).then(
        user =>{
         
          res.status(201).json({message: "Successful Registration", user: user});
        }
       ).catch(err=>{
        error: {
          message: err.message;
        }
       });
        
      }
     })
    //set the password with the encrypted password
    // save the user to the database

    }
  })
  .catch(err => {
    error: {
      message: err.message;
     
    }
  });
  //if the user exists-return a response that says email exists, try logging in
  //else - no user exists
  //then encrpyt the password
  //set the password with the encrypted password
  //save the user to the database


});

router.post("/login", (req,res)=>{

});


module.exports = router;