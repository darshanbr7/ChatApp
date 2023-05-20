const Signup = require("../Module/Signup")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const SignupController={}
SignupController.home=(req,res)=>{
    res.json("Welcome to Home page")
}
SignupController.register=(req,res)=>{
    const body=req.body
    const user=new Signup(body)
    bcrypt.genSalt()
            .then((salt)=>{
                bcrypt.hash(user.password,salt)
                      .then((encrypt)=>{
                        user.password=encrypt
                        user.save()
                            .then((user)=>{
                               const token={
                                user_Id:user._id,
                                username:user.username,
                                email:user.email
                               }
                               const gentoken=jwt.sign(token,"psa123",{expiresIn:"5d"})
                               res.json({
                                "token":gentoken
                               })
                            })
                            .catch((e)=>{
                                res.json(e.message)
                            })
                      })
                      .catch((e)=>{
                        res.json(e.message)
                      })
            })
            .catch((e)=>{
                res.json(e.message)
            })
}
SignupController.list=(req,res)=>{
    Signup.find()
          .then((user)=>{
            res.json(user)
          })
          .catch((e)=>{
            res.json(e.message)
          })
}

module.exports=SignupController