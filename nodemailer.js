const nodemailer =require('nodemailer');
// const {nodemailer_passkey}=require('./secrets');
// https - 443 http 8080
//userObj-> name email password 
module.exports.sendMail=async function sendMail(str,data) {
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'prachi9239soni@gmail.com', // generated ethereal user
      pass: "vfhfmnbomalkfqbf", // generated ethereal password
    },
  });

  var Osubject,Otext,Ohtml;
  if(str=="signup"){
    Osubject=`Thank you for signing ${data.name}`;
    Ohtml=`
    <h1>Welcome to foodApp.com</h1>
    Hope you have a good time !
    Here are your details-
    Name - ${data.name}
    Email- ${data.email}
    `
    
  }
  else if(str=="resetOTP"){
    Osubject=`Reset Password OTP`;
    Ohtml=`
    <h1>Enthusia.com</h1>
    Here is your OTP to reset password:
    OTP-${data.otp}
    This will expire int 5 minutes.
    `
  }

  let info = await transporter.sendMail({
    from: '"Enthusia 🍱" <prachi9239soni@gmail.com>',// sender address <${userObj.email}>
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
    // plain text body
    html: Ohtml, // html body
  });
  console.log("Message sent: %s", info.messageId);
};