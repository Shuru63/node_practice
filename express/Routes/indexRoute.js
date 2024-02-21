const express= require("express")
const { greeting, submit } = require("../Controler/indexControler")



const router=express.Router()
router.get("/Home",greeting)
router.post("/submit",submit)
module.exports=router