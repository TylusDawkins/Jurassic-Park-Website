import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Staff = () => {
    const [staff,setStaff] = useState({})
  
    const getStaff = async() => {
      const staffList = await axios.get('https://jurassic-master.herokuapp.com/api/staff')
      console.log(staffList.data.staffing)
      setStaff(staffList.data.staffing)
      console.log(staff)
    }
    useEffect(() =>{
      getStaff()
    },[])
    return (
        <div> 
            test
            {staff.map((people) => (
        <div>
          <img style={{ display: "block" }} src={people.image} alt={people.name}/>
          <h3>{people.name}</h3>
          <h1>{people.title}</h1>
        </div>
      ))}
        </div>
        )
}

export default Staff;
