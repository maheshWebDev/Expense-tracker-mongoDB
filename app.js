const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

const express = require('express');

const cors = require('cors');

const UserRouter = require('./routes/userRoute');

const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/user',UserRouter);

mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true
}).then((conn)=>{
    // console.log(conn);
    console.log("connection succesful....");
    app.listen(3000,()=>{
        console.log("server is running......")
    })
}).catch((error)=>{
    console.log(error.message);
})



