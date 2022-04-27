const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
app.listen(3000,function(){
    console.log("Listening on Port 3000");
});

const userRouter = require('./userRouter');
app.get("/",(req,res)=>{
    res.send("Home Page of Website")
})
app.use('/users',userRouter);
