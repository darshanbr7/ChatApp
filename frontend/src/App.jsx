import React from 'react'
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Signup from './Signup/Signup'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route  path='/Login' element={<Login/>} />
    <Route  path='/Signup' element={<Signup/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App