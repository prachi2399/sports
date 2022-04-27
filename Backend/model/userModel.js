const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const validatePhoneNumber = require('validate-phone-number-node-js');
const crypto = require('crypto');

const db_link= "mongodb+srv://enthusia2k22:eW0oYJoPi0UeQvZv@cluster0.szcuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db_link)
.then(function(db){
    console.log("DB Linked");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true
    },
    instituteName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type: String,
        required: [true, 'User phone number required']
    },
    sports:{
        type:String,
        required:true
    },
    // sports:[{
    //     type:String
    // }],
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})

const userModel = mongoose.model('userModel',userSchema);

module.exports=userModel;