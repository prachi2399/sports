const express= require('express');
const userRouter = express.Router();
const userModel = require('./userModel');
const {signUp,login,forgetpassword,resetpassword }= require('./authController')

userRouter
.route('/signup')
.post(signUp)

userRouter
.route('/login')
.post(login);

userRouter
.route('/forgetPassword')
.post(forgetpassword);

userRouter
.route('/resetPassword')
.post(resetpassword);


module.exports=userRouter;
