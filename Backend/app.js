const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000);

const userRouter = require('./userRouter');
app.get("/",(req,res)=>{
    res.send("Home Page of Website")
})
app.use('/users',userRouter);
