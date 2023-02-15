const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const app = express()

const port = process.nextTick.PORT || 3000

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})