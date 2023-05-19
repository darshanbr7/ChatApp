import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="container ">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-5 bg-info">
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <label > Email</label>
                                    <input type="text"  className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label > Password</label>
                                    <input type="text"  className='form-control' />
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