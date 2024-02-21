const { default: mongoose } = require("mongoose")
const mvc = require("mongoose")
 const IndexSchema= new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    contact:{type:Number,require:true}
    // name:{type:String,require:true},
    // name:{type:String,require:true}
 })
 const IndexModel=mongoose.model("shurudata",IndexSchema)
 module.exports=IndexModel