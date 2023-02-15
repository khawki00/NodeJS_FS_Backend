const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // id
  //firstName, lastName, address city, state, zip, email password
  _id: mongoose.SchemaTypes.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required:ture,
  },
  city: {
    type:String,
    required: true,
  },
  state: {
    type:String,
    required: true,
  },
  zipCode:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);