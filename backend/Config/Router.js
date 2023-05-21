const express=require("express")
const SignupController=require("../App/Controller/SignupController")
const LoginController=require("../App/Controller/LoginController")
const verifyUserToken=require("../App/Middleware/auth")
const isUser=require("../App/Middleware/isUser")
const ChatController=require("../App/Controller/ChatController")
const route=express.Router();

// register Routes
route.post("/user/register",SignupController.register)

//login Routes
route.post("/login",LoginController.login)

// chat 
route.post("/user/addpost",verifyUserToken,ChatController.savechat )

route.get("/",verifyUserToken,isUser,SignupController.home)

route.get("/all/user",verifyUserToken,isUser,SignupController.list)


module.exports=route