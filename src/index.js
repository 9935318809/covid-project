const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/routes")

const app = express()

app.use(express.json())
app.use("/",router)
mongoose.connect("mongodb+srv://covid:covid@covidcluster.bb7p6rc.mongodb.net/covid?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>console.log("mongodb is connected"))
.catch(()=>console.log("database connection error"))


app.listen(3000,()=>console.log("App is running on port 3000"))