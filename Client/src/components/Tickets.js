import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Tickets = () => {
    const [tickets,setTickets] = useState({})
  
    const getTickets = async() => {
      const ticketList = await axios.get('https://jurassic-master.herokuapp.com/api/tickets')
      console.log(ticketList.data.tickets)
      setTickets(ticketList.data.tickets)
      console.log(tickets)
    }
    useEffect(() =>{
      getTickets()
    },[])
    return (
        <div> 
            test
            {tickets.map((ticket) => (
        <div>
          <h3>{ticket.type}</h3>
          <h1>{ticket.price}</h1>
        </div>
      ))}
        </div>
        )
}

export default Tickets;
