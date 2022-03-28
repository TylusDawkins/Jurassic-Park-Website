import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Tickets = () => {
  const [tickets, setTickets] = useState({});

  const getTickets = async () => {
    const ticketList = await axios.get(
      "https://jurassic-master.herokuapp.com/api/tickets"
    );
    console.log(ticketList.data.tickets);
    setTickets(ticketList.data.tickets);
    console.log(tickets);
  };
  useEffect(() => {
    getTickets();
  }, []);

  if (tickets[0]) {
    return (
      <div>
        {tickets.map((ticket) => (
          <div>
            <h3>{ticket.Type}</h3>
            <h1>{ticket.Price}</h1>
          </div>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Tickets;
