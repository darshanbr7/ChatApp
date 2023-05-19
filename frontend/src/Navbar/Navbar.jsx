import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className="container-fluid">
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className=' navbar navbar-brand text-white'>Todo Application</div>
        <div className="ml-auto">
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to={"./Login"}  className='nav-link text-white' >Login</Link>  </li>
          </ul>
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar