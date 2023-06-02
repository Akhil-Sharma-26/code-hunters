import React from "react";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import Home from "./Components/Home.jsx";
import "./Styles/Home.scss";

const App = () => {
  return (
    <>
      <div>
        <Login />
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
