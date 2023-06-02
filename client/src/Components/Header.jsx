import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <h1>myHerupa2</h1>
        <main>
          <Link to = "/">Home</Link>  
          <Link to = "/#notes">Notes</Link>
          <Link to = "/financial_assistance">Financial Assitance</Link>
          <Link to = "/societies">Societies</Link>
          <Link to = "/events">Events</Link>
          <Link to = "/aboutus">About us</Link>
        </main>
    </nav>
  )
}

export default Header