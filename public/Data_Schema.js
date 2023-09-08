import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : {
        type : String,
    },
});

export const User =  mongoose.model("User", userSchema);