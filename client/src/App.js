import React from "react";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import Home from "./Components/Home.jsx";
import Societies from "./Components/Societies";
import "./Styles/Home.scss";
import Footer from "./Components/Footer";
import "./Styles/Footer.scss";
import Event from "./Components/Event";
import "./Styles/Event.scss";
import Firstyear from "./Components/First_year";
const App = () => {
  return (
    // <div>
    //   <Login />
    // </div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/societies" element={<Societies/>}/>
        <Route path="/events" element={<Event />} />
        <Route path="/notes" element={<Firstyear/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
