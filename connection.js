const mongoose=require("mongoose")
require("dotenv").config()
//connections using mongoose
const connection=mongoose.connect(process.env.Connection_String).then(()=>console.log("connected!"))
.catch(err=>console.log(err))

module.exports=connection