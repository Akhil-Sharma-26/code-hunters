import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>MyHerupa2</h1>
        <main>
          <div className="isLoggedIn">
            <div className="icon"></div>
            <div className="name">Hi, Anush</div>
          </div>
          <HashLink to = {"/#home"}>Home</HashLink>  
          <HashLink to = {"/#notes"}>Notes</HashLink>
          <HashLink to = {"/#finance"}>Finance</HashLink>
          <HashLink to = {"/#societies"}>Societies</HashLink>
          <HashLink to = {"/#events"}>Events</HashLink>
          <HashLink to = {"/#aboutus"}>About us</HashLink>
          <Link to = {"/other"}>Others</Link>
          {/* HashLink sirf wo hi pages karne hain jo scroll kar ke access kiye ja sakte hain and jinke liye alag se page bnana hai unke liye sirf link */}
        </main>
    </nav>
  );
};

//! to create all the paths and all the Create new lining tags you must ensure about the routing in the app.js unless there is no benefit of doing anything by just putting the LINK tag and then giving a link the link tag will only work if the new component's address is in one of the ROUTES

export default Header;
