require('dotenv').config();
const mongoose = require("mongoose")
const User = require("../models/userModel")

const connect = async () =>{
  console.log("MongoDB is up and running");
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.mongo);
};

const disconnect = async () => {
  await mongoose.connection.close();
};
//obj is any json object {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj) => {
  return await User.findOne(obj).exec();
};

const saveUser = async (newUser)=>{
  return await newUser.save();
};

module.exports = { connect , disconnect, findUser, saveUser}