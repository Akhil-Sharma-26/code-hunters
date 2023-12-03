import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {

  const [cover, setCover] = useState(false);
  const toggleCover = () =>{ 
    console.log(cover);
    setCover(!cover);
  }
  return (
    <>
    <nav className={cover ?  "cover" : "unCover"}>
        <h1 >MyHerupa2</h1>
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
        <button onClick={toggleCover} id="button_mobile_menu">
        <div id="img" className="icon_menu_mobile">
        </div>
        </button>
    </nav>
    <div className={cover ? "options" : "hide"} id="mobile_menu">
          <Link to={"/"}  onClick={toggleCover}>Home</Link>
          <Link to={"/firstyear"} onClick={toggleCover}>Notes</Link>
          <Link to = {"/other"}  onClick={toggleCover}>Others</Link>
          <Link to={"/banks"}  onClick={toggleCover}>Banks & Loans</Link>
          <Link to={"/finance"} style={{textAlign: "center"}}  onClick={toggleCover}>Financial <br/>Assistance</Link>
          <Link to={"/societie"}  onClick={toggleCover}>Societies</Link>
          <Link to={"/events"}  onClick={toggleCover}>Events</Link>
    </div>
    </>
  );
};

//! to create all the paths and all the Create new lining tags you must ensure about the routing in the app.js unless there is no benefit of doing anything by just putting the LINK tag and then giving a link the link tag will only work if the new component's address is in one of the ROUTES

export default Header;
