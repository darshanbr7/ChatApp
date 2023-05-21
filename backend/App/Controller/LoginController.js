const Signup=require("../Modle/Signup")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const LoginController={}
LoginController.login= (req,res)=>{
    const body=req.body
   Signup.findOne({email:body.email})
         .then(async(user)=>{
             const verifyPass= await bcrypt.compare(body.password,user.password)
             if(!verifyPass){
                res.status(401).json("Email/Password Error")
             }else{
                const token={
                  user_Id:user._id,
                  username:user.username,
                  email:user.email
                }
                const gentoken=jwt.sign(token,"psa123",{expiresIn:"5d"})
                res.send({
                  "token":gentoken
                })
             }
         })
         .catch((e)=>{
          res.status(401).json("Email/Password Error")
         })
}
module.exports=LoginController