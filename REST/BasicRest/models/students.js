const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
  },

  mail:{
    type: String,
    required: true,
    unique:[true, 'email id already present'],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Invalid email')
      }
    }
  },

  phone:{
    type:Number,
    validate(value){
      if(value.toString().length !== 10){
        console.log(value.toString().length);
        throw new Error('Invalid number')
      }
    },
    unique: true,
    required: true
  },

  address:{
    type: String,
    required: true,
  }
})

// create new collection

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student