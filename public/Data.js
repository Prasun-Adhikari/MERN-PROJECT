import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { User } from "./Data_Schema.js" //getting the model form the Data_Schema
import React from "react";
import session from "express-session";
import data from "./Fetch_Data.js";

const app = express();

// connecting to the database.
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(()=>{
    console.log("Connected to the DataBase Successfully");
})
.catch((err)=>{
    console.log(`Opps ${err}`)
});


app.use(session({
    secret : "1234",
    resave : false,
    saveUninitialized : false
}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());  //cross origin resource sharing.
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.send("Hello This is working properly");
})


const filePath = "./Hello";
app.post("/login", async (req, res)=>{
    // data to be saved.
    const dataToSave = req.body;
    const existingData = await User.findOne({
        email : dataToSave.email,
        password : dataToSave.password
    });

    if(existingData){

        req.session.user = existingData;
        return res.redirect("/main");

    }else{
        console.log("Login Failed");
        res.status(401).send("Login Failed: Invalid email or password");
    }
});

app.get("/main", (req, res)=>{
    if(!req.session.user){
        return res.redirect("/login");
    }
    console.log("Success");
    res.send(data);
    // const user = req.session.user;
    // res.render("main", {user});
})


app.listen(5000, ()=>{
    console.log("App is running");
});