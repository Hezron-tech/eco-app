const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require("dotenv")
const authRoute = require('./routes/auth')


dotenv.config()

const app = express()

app.use(express.json())

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


app.use('/api/auth',authRoute)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})