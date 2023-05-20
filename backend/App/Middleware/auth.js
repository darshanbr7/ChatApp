const jwt=require("jsonwebtoken")
const verifyUserToken=(req,res,next)=>{
    let token = req.headers.authorization;
    if (!token) {
        res.status(401).json("Access Denied / Unauthorized request");
   }
    try{
        token=token
        if (token=="null"||!token) {
            res.status(401).json("Access Denied / Unauthorized request");
       }
       let verifyUser=jwt.verify(token,"psa123")
       if(!verifyUser){
        res.status(401).json("Unauthorized request")
       }else{
        req.user=verifyUser;
        next()
       }
    }
    catch(err){
        res.status(400).json("invalid token")
    }
}

module.exports=verifyUserToken