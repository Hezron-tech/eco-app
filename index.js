const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const app = express()

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is successfully connected");
})
.catch((err)=>{
    console.log(err);
})

// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(process.env.MONGO_URL);
// }

app.use(express.json())

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})