const express= require('express');
const userRouter = express.Router();
const {signUp,login,forgetpassword,resetpassword, emailSend }= require('./authController')

userRouter
.route('/signup')
.post(signUp)

userRouter
.route('/login')
.post(login);

userRouter
.route('/resetPassword')
.post(resetpassword);

userRouter
.route('/forgetPassword')
.post(forgetpassword);

module.exports=userRouter;
