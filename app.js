const express = require('express');
const cors = require('cors');
const app = express();
// app.use(express.json());
app.use(cors())

app.use(express.static('public/build'));

app.listen(3000,function(){
    console.log("Listening on Port 3000");
});
//middleware func-> post, front-> json
app.use(express.json()); //global middleware 
const port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});


const userRouter = require('./Backend/userRouter');
app.get("/",(req,res)=>{
    res.send("Home Page of Website")
})
app.use('/users',userRouter);
