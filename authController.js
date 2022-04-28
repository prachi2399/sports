const express= require('express');

const userModel = require('./model/userModel');
const otpModel = require('./model/OTPModel');
const jwt = require('jsonwebtoken');
const { sendMail } = require("./utility/nodemailer");
const JWT_KEY="6578shjk87690@#$%fhj";
const { use } = require('./userRouter');

//signup
module.exports.signUp=async function signUp(req,res){
    try{
        let dataObject = req.body;
        let user = await userModel.create(dataObject);
        if(user){
            res.json({
                message:"User Signed Up",
                data: user
            })
        }else{
            res.json({
                message:"Error while Signing Up"
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.getAllUsers=async function getAllUsers(req,res){
    let users = await userModel.find();
    if(users){
        res.json({
            message:"Users Received",
            data:users
        })
    }
    res.send("User ID received");
    }

module.exports.login = async function login(req, res) {
    try {
      let data = req.body;
      if (data.email) {
        let user = await userModel.findOne({ email: data.email });
        if (user) {
          //bcrypt -> compare
          if (user.password == data.password) {
            let uid = user["_id"]; //uid
            let token = jwt.sign({ payload: uid }, JWT_KEY);
            res.cookie("login", token, { httpOnly: true });
            res.cookie('isLoggedIn',true);
            return res.json({
              message: "User has logged in",
              data: user, // userDetails:data,
            });
          } else {
            return res.json({
              message: "wrong credentials",
            });
          }
        } else {
          return res.json({
            message: "User not found",
          });
        }
      } else {
        return res.json({
          message: "Empty field found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

//resetpassword
module.exports.resetpassword = async function resetpassword(req,res){
    try{
        let mail = req.body.email;
        let otp = req.body.code;
        let user = await otpModel.findOne({email:mail,code:otp});
        if(user){
            let currentTime = new Date().getTime();
            let diff = user.expireIn-currentTime;
            if(diff<0){
              return res.json({
                message: "OTP Expired",
            });
            }else{
              let user=userModel.findOne({email:mail});
              if(user){
                let newPassword = req.body.password;
                await user.findOneAndUpdate({mail,password:newPassword});
                return res.json({
                  message: "Password Changed SuccessFully"
                });
              }else{
                return res.json({
                  message: "Email doesn't Exist"
                });
              }
            }
        }else{
            res.json({
                message: "Invalid OTP"
            });
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.forgetpassword = async function forgetpassword(req,res){
  try{
    let email = req.body.email;
    let user = await userModel.findOne({email});
    if(user){
        let otp = Math.floor((Math.random()*10000)+1);
        console.log(otp);
        let userExist = otpModel.findOne({email});
        if(userExist){
          let del = await otpModel.findOneAndDelete({email});
          console.log("user exists, deleting it first")
        }
        let otpData = new otpModel({
          email:req.body.email,
          code:otp,
          expireIn:new Date().getTime()+300*1000
        })
        let otpResp = await otpData.save();
        let obj={
          otp:otp,
          email:email
        }
        sendMail("resetOTP",obj);
        res.json({
          message: "OTP Send On Email"
        });
    }else{
        res.json({
            message: "Email doesn't Exist"
        });
    }
}catch(err){
    res.json({
        message:err.message
    })
}
}

