import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  let navigate = useNavigate()
  
  return (
    <nav id="navbar">
        <img src='https://i.imgur.com/xxlw1er.png' alt="Jurassic Logo" id="logo" />
      <h4>Jurassic Park</h4>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/joinform'>Join Our Newsletter!</Link>
        <Link to='/attractions'>Attractions</Link>
        <Link to='/aboutus'>Our Staff</Link>
        <Link to='restaurants'>Restaurants</Link>
        <div className='bckbtn' onClick={() => navigate(-1)}>Back</div>
      </div>
    </nav>
  )
}

export default Nav