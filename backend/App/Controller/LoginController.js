const Signup=require("../Module/Signup")
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
                res.json(user)
             }
         })
         .catch(()=>{
           
           res.send("Mobile/Email or Password is wrong")
         })
}
module.exports=LoginController