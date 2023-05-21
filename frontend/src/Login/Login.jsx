import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {useNavigate} from "react-router-dom"



const Login = () => {
    const navigate=useNavigate()
    
   
    const[email,setEmail]=React.useState("")
    const[password,setPassword]=React.useState("")
    const Submit=(e)=>{
        e.preventDefault()
      axios.post("http://localhost:3009/login",{
                                                email:email,
                                                password :password
                                            })
            .then((response)=>{
                    console.log(response)
                const token=response.data.token
                localStorage.setItem('token',token)
                navigate("/")
            
            })
            .catch((e)=>{
                console.log(e)
            })
      
      
    }

  return (
    <div>
        <div className="container ">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-5 bg-info">
                        <div className="card-body">
                            <form  onSubmit={Submit}>
                                <div className="form-group">
                                    <label > Email</label>
                                    <input type="text"  className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                                <div className="form-group">
                                    <label > Password</label>
                                    <input type="text"  className='form-control'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <center>
                                    <button className='btn btn-primary'> Login</button>
                                </center>
                                <p> new to here ? <Link to={"/Signup"} className='text-white'> Signup</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login