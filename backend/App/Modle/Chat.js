const mongoose=require("mongoose")
const Schema=mongoose.Schema
const Chat=new Schema({
    user_Id:{
        type:Schema.Types.ObjectId,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const userChat=mongoose.model("userChat",Chat)

module.exports=userChat