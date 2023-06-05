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
import FYear from "./Components/FYear";
import "./Styles/FYear.scss";
import "./Styles/Card.scss";
import "./Styles/Selector.scss";
import SYear from "./Components/SYear";
import TYear from "./Components/TYear";

const App = () => {
  return (
    // <div>
    //   <Login />
    // </div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/societie" element={<Societies />} />
        <Route path="/events" element={<Event />} />
        <Route path="/firstyear" element={<FYear />} />
        <Route path="/secondyear" element={<SYear />} />
        <Route path="/thiedyear" element={<TYear />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
