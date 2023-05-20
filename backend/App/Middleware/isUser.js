const isUser=async(req,res,next)=>{
    if (req.user.user_Id=== 0) {
        return res.status(401).send("Unauthorized!");    
    }else{
        next()
    }
    
}
module.exports=isUser