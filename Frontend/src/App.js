import './App.css';
import { useState, useEffect } from 'react'
import Home from './components/Home'
import JoinForm from './components/JoinForm';
import Attractions from './components/Attractions';
import DinoDeets from './components/DinoDeets';
import Dinos from './components/DinoList'

function App() {
  const [page, setPage] = useState(<Home/>)
  const goHome = () => {
    setPage(<Home/>)
    console.log('You are now at home page')
  } 
  const goJoin = () =>{
    setPage(<JoinForm 
      newUser={newUser}
      handleChange={handleChange}
      addUser={addUser}/>)
    console.log("You are now at the join form")
  }
  const goAttractions = () =>{
    setPage(<Attractions dinos={goDinos} details={goDinoDeets}/>)
    console.log("You are now at the Attractions page")
  }
  const goDinos = () =>{
    setPage(<Dinos/>)
    console.log('You are now at the Dinos page!')
  }
  const goDinoDeets = () =>{
    setPage(<DinoDeets />)
  }

  const [newUser, setNewUser] =useState({
      firstName: '',
      lastName: '',
      email: '',
      age: ''
  })
  const addUser = (e) => {
      e.preventDefault()
      
  }
  const handleChange = (e) => {
      setNewUser({...newUser, [e.target.name]: e.target.value})
  }




  return (
    <div className="App">
      <div className='main'>
          <nav>
              <img src='https://i.imgur.com/xxlw1er.png' alt="Jurassic Logo" id="logo" onClick={goHome}/>
              <ul id='navbar'>
                  <li onClick={goAttractions}>Attractions</li>
                  <li>Restaurants</li>
                  <li>About Us</li>
                  <li>Tickets/Pricing</li>
                  <li>Travel</li>
                  <li onClick={goJoin}>Join Our Dino Club!</li>
              </ul>
          </nav>
          <div className='body'>
            {page}
          </div>
        </div>
    </div>
  );
}

export default App;
