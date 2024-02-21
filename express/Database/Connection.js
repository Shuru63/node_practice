const mongoose= require("mongoose")

const DB=async()=> {
try{
await mongoose.connect("mongodb://localhost:27017")

console.log("database connection Establish ")
}catch(error){
console.log(error)
}
}
 
module.exports=DB;