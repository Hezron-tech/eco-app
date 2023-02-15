const router = require("express").Router();

const User = require ('../models/User');

const bcrypt = require("bcrypt")


//Register Api

router.post("/register" , async(req,res)=>{
    try {

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.passowrd,salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.passowrd,
        });
        const user = await newUser.save();
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})