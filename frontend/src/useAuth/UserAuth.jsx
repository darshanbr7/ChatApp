import React from "react"
import axios from "axios"

import {useNavigate} from "react-router-dom"
import { json } from "react-router-dom"
const UserAuth = () => {
   const navigate=useNavigate()

const getToken=()=>{
  const tokenString= localStorage.getItem("token")
  const userToken=JSON.parse(tokenString)
  return userToken
}
const getUser=()=>{
   const userString= localStorage.getItem("username")
   const user_detail=JSON.parse(userString)
   return user_detail
 }

  const[token,setToken] =React.useState(getToken())
  const[username,setUsername] =React.useState(getUser())
  const saveToken=(token,username)=>{
   localStorage.setItem("token",JSON.stringify(token))
   localStorage.setItem("userName",JSON.stringify(username))
   setToken(token)
   setUsername(username)
   navigate("/home")
  }
 const http=axios.create({
    baseURL:"http://localhost:3009",
    headers:{
        "Content-Type":"application/json"
    }
 })
 return {
   setToken:saveToken,
   token,
   username,
   getToken,
    http
 }
}

export default UserAuth