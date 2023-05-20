const mongoose=require("mongoose")

const Conect=()=>{
 mongoose.connect("mongodb://localhost:27017/Chat")
         .then(()=>{
            console.log("connected to database")
         })
         .catch((e)=>{
            console.log(e.message)
         })
}
module.exports=Conect