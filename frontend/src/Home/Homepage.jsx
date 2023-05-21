import React, { useState } from 'react'

const Homepage = () => {
 const [error,setError]=useState({})
  const onSubmitHandler=(e)=>{
    e.preventDefault()
   if(localStorage.getItem("token")){
    alert("Succesfully sent")
   }else{
    setError({
      msg:"First you need to Login"
    })
   }
  }
  return (
    <div>
       <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <form  onSubmit={onSubmitHandler}>
                    <div className="form-group">
                      <input type="text"  className='form-control' />
                      { Object.keys(error).length>0  &&   <p style={{color:"red"}}>{error.msg}</p>}
                    </div>
                    <center>
                      <button className='btn btn-primary'>Send</button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Homepage