const express=require("express")
const SignupController=require("../App/Controller/SignupController")
const LoginController=require("../App/Controller/LoginController")
const verifyUserToken=require("../App/Middleware/auth")
const isUser=require("../App/Middleware/isUser")
const route=express.Router();
route.get("/",SignupController.home)
route.post("/user/register",SignupController.register)
route.get("/all/user",verifyUserToken,isUser,SignupController.list)
route.post("/user/login",verifyUserToken,LoginController.login)

module.exports=route