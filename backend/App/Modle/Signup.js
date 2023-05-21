const mongoose=require("mongoose")
const Schema= mongoose.Schema
const isEmail=require("validator/lib/isEmail")
const user=new Schema({
    username:{
        type:String,
        required:[true, "Username is needed"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "email is needed"],
        unique:true,
        validate:{
            validator:(value)=>{
                return isEmail(value)
            },
            message:()=>{
                return  "Enter Proper Email Format"
            }
        }
    },
    password:{
        type:String,
        required:[true, "Password is needed"],
    }
})

const Signup=mongoose.model("Signup",user)
module.exports=Signup