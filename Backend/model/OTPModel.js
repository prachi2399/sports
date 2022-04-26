const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const crypto = require('crypto');

const db_link= "mongodb+srv://enthusia2k22:eW0oYJoPi0UeQvZv@cluster0.szcuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db_link)
.then(function(db){
    console.log("DB Linked");
})
.catch(function(err){
    console.log(err);
})

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    code:{
        type:String,
    },
    expireIn:{
        type:Number,
    }
},{
    timestamps:true
})

const otpModel = mongoose.model('otpModel',otpSchema);

module.exports=otpModel;