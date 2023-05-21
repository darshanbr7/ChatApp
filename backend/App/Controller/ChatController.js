const userChat=require("../Modle/Chat")

const ChatController={}
ChatController.savechat=(req,res)=>{
    const body=req.body
    body.user_Id=req.user._id
    new userChat(body).save()
                      .then((chat)=>{
                        res.json(chat)
                      })
                      .catch((e)=>{
                        res.json(e)
                      })
}

module.exports=ChatController