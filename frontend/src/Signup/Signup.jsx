import React from 'react'
import { Link } from 'react-router-dom'
import  axios from "axios"
const Signup = () => {
   const[check,setCheck]= React.useState(false)
   const[username,setUsername]=React.useState("") 
   const[email,setEmail]=React.useState("") 
   const[password,setPassword]=React.useState("") 
   const createUser= async(e)=>{
    e.preventDefault()
     try{
    await axios.post("http://localhost:3009/signup",{
        username:username,
        email:email,
        password:password
    })
    console.log("succesfully registred")
     }
     catch(e){
       console.log(e)
     }
    
   }
 

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-4 bg-info">
                        <div className="card-body">
                            <form  >
                            <div className="form-group">
                                    <label > UserName</label>
                                    <input type="text"  className='form-control'  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                                </div>
                            <div className="form-group">
                                    <label > Email</label>
                                    <input type="text"  className='form-control' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <label > Password</label>
                                    <input type="text"  className='form-control' value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <input type="checkbox"   onChange={(e)=>{
                                    setCheck(e.target.checked)
                                }} /> Pleace Accept terms&Condition
                                <center>
                                    <button className='btn btn-primary' disabled={!check} onClick={createUser}> Register</button>
                                </center>
                                <p>existing user ? Login <Link to={"/Login"} className='text-white'>Here</Link> </p>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup