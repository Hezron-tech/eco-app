const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    passowrd:{
        type:String,
        required:true,
        
    }





})