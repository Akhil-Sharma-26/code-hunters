import React from 'react'
import { Link } from "react-router-dom"
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>myHerupa2</h1>
        <main>
          <HashLink to = {"/#home"}>Home</HashLink>  
          <HashLink to = {"/#notes"}>Notes</HashLink>
          <Link to = {"/financial_assistance"}>Financial Assitance</Link>
          <Link to = {"/societies"}>Societies</Link>
          <Link to = {"/events"}>Events</Link>
          <HashLink to = {"/#aboutus"}>About us</HashLink>
          {/* HashLink sirf wo hi pages karne hain jo scroll kar ke access kiye ja sakte hain and jinke liye alag se page bnana hai unke liye sirf link */}
        </main>
    </nav>
  )
}

export default Header