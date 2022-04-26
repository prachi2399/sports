const express= require('express');
const userModel = require('./userModel');
const jwt = require('jsonwebtoken');
// const { sendMail } = require("../utility/nodemailer");
// const JWT_KEY=require('../../secrets');
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
            // let token = jwt.sign({ payload: uid }, JWT_KEY);
            // res.cookie("login", token, { httpOnly: true });
            // res.cookie('isLoggedIn',true);
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
  };

//forgetPassword
module.exports.forgetpassword = async function forgetpassword(req,res){
    try{
        let {email} = req.email;
        let user = await userModel.findOne({email:email});
        if(user){
            //createResetToken is used to create a new token
            const resetToken= user.createResetToken();
            //https://abc/resetpassword/resettoken
            let resetPasswordLink = `${req.protocol}://
            ${req.get('host')}/resetpassword/${resetToken}`

            //send email to the user
            //nodemailer
            let obj={
              resetPasswordLink:resetPasswordLink,
              email:email
            }
            sendMail("resetPassword",obj);
            return res.json({
              message: "reset password link sent",
              data:resetPasswordLink
            })
        }else{
            res.json({
                message:"Register First"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//resetpassword
module.exports.resetpassword = async function resetpassword(req,res){
    try{
        const token = req.params.token;
        let {password,confirmPassword}=req.body;

        let user = await userModel.findOne({resetToken:token});
        if(user){
            //resetPasswordHandler will update user's password in db
            user.resetPasswordHandler(password, confirmPassword);

            await user.save();
            res.json({
                message: "password changed successfully, please login again"
            });
        }else{
            res.json({
                message: "user not found"
            });
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

