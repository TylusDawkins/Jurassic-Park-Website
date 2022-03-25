import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  let navigate = useNavigate()
  
  return (
    <nav className="navbar">
      <h4>Jurassic Park</h4>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/joinform'>Join Our Newsletter!</Link>
        <Link to='/attractions'>Attractions</Link>
        <Link tp='/aboutus'>Our Staff</Link>
        <div className='bckbtn' onClick={() => navigate(-1)}>Back</div>
      </div>
    </nav>
  )
}

export default Nav