const express=require("express")
const Connect=require("./Config/DBcontroller")
const route=require("./Config/Routes")
const cors=require("cors")
const app=express()
const port=3009
app.use(cors())
app.use(express.json())

app.use(route)

// import the database connection
Connect()

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})