const IndexModel = require("../Model/indexModal");

const greeting = (req, res) => {
    res.send("hello world");
  };
  
  const submit = async (req, res) => {
    try{
    const {name,email,contact}=req.body
    const existingUser=await IndexModel.find({email})
    if(existingUser){
      return res.status(200).send({success:true,message:"user Already exist "});
    }
  
    const newUser = await IndexModel.create({
      name,
      email,
      contact,
    });
    
    res.status(200).send({success:true,message:"New user ",newUser});
    console.log(name,email,contact)
  }
  catch(error){
    console.log(error)
    res.status(500).send({success:false,message:error});
  }
  }
  
  module.exports = { greeting, submit };