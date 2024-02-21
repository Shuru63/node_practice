require("dotenv").config();
const express = require("express");
const indexRouter=require("./Routes/indexRoute")
const DB = require("./Database/Connection")
const app=express()
// mvc MOdel view control
DB();
app.use(express.json)
// app.get("/",)
app.use("/",indexRouter)
app.listen(process.env.PORT || 4000, ()=>{
    

 console.log(`server is running on port${process.env.PORT}`)
})