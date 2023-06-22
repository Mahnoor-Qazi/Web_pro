import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:String,
    password:String
})

export const userModel = mongoose.model("user",userSchema);