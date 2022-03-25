import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import JoinForm from './components/JoinForm';
import Attractions from './components/Attractions';
import DinoDeets from './components/DinoDeets';
import DinoList from './components/DinoList'
import AboutUs from './components/AboutUs';
import Nav from './components/Nav';


function App() {
  // const [page, setPage] = useState(<Home/>)
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
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/aboutus' element={ <AboutUs /> } />
          <Route path='/attractions' element={ <Attractions />} />
          {/* <Route path="/dinosaurs" element={ <DinoList dinos={dinos} />} />
          <Route path="/dinosaurs/:id" element={ <DinoDeets dinos={dinos} />} /> */}
          <Route path='/joinform' element={ <JoinForm 
        newUser={newUser}
        handleChange={handleChange}
        addUser={addUser}/>} />
        </Routes>
      </main>
    </div>
    
  )
  }




export default App;



// return (
//   <div className="App">
//     <div className='main'>
//         <nav>
//             <img src='https://i.imgur.com/xxlw1er.png' alt="Jurassic Logo" id="logo" onClick={goHome}/>
//             <ul id='navbar'>
//                 <li onClick={goAttractions}>Attractions</li>
//                 <li>Restaurants</li>
//                 <li>About Us</li>
//                 <li>Tickets/Pricing</li>
//                 <li>Travel</li>
//                 <li onClick={goJoin}>Join Our Dino Club!</li>
//             </ul>
//         </nav>
//         <div className='body'>
//           {page}
//         </div>
//       </div>
//   </div>
// );
// }

// const goHome = () => {
//   setPage(<Home/>)
//   console.log('You are now at home page')
// } 
// const goJoin = () =>{
//   setPage(<JoinForm 
//     newUser={newUser}
//     handleChange={handleChange}
//     addUser={addUser}/>)
//   console.log("You are now at the join form")
// }
// const goAttractions = () =>{
//   setPage(<Attractions dinos={goDinos} details={goDinoDeets}/>)
//   console.log("You are now at the Attractions page")
// }
// const goDinos = () =>{
//   setPage(<DinoList/>)
//   console.log('You are now at the Dinos page!')
// }
// const goDinoDeets = () =>{
//   setPage(<DinoDeets />)
// }