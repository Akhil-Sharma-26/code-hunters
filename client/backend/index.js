const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mesaaransh:' + process.env.pass + '@cluster0.x2j4nhi.mongodb.net/ccsintra2023?retryWrites=true&w=majority')

const app = express()


const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    password: String,
    dob: Date,
    email: String,
    phone: String,
    dateCreated: Date
})



app.get("/signup", function(req, res){

    res.json("Hey")
    
})


app.post("/signup", function(req, res){

    
    
})



app.listen(8000, ()=>{console.log("----------AppStarted-----------");})