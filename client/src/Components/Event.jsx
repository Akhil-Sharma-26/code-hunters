import React from "react";
import Card from "./Card";
import axios from "axios";

const Event = () => {
  const objectArr = [
    {
      name: "HackTU",
      pic: "../Assests/HACKTU.png",
      desc: "Creative computing Society is back with HackTU, flagship event to be hosted at Thapar Institute of Engineering and Technology, Patiala and we're excited to see what new and exciting ideas will come out of this year's event",
    },
    {
      name: "Imagine Cup",
      pic: "../Assests/ic.jpg",
      desc: "Creative computing Society is back with HackTU, flagship event to be hosted at Thapar Institute of Engineering and Technology, Patiala and we're excited to see what new and exciting ideas will come out of this year's event",
    },
    {
      name: "Google Summer of code",
      pic: "../Assests/ic.jpg",
      desc: "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.",
    },
  ];

  const FDB = e => {
    e.preventDefault();

    axios.get('/getData').then(
      response => {
        console.log(`Data received from servers.`);
        console.log(response.data);
      }
    ).catch( error => {
      console.log(`Error with axios, ${error}`)
    })

  }

  return (
    <div className="event">
      <h1>Events</h1>
      <h5>
        From Bytes to Brushstrokes: Unleash Your Potential at these Amazing Tech
        and Non-Tech Events
      </h5>
      {/* <div className="cards">
            {/* <div className="c1" id='cd1'>
                <div className="pic1"></div>
                <h3>Microsoft Imagine Cup</h3>
                <p>2 June 23 - 10 June 23</p>
            </div> */}
      {/* <div className="c1" id='cd2'>
                <div className="pic2"></div>
                <h3>Google Summer of Code</h3>
                <p>2 June 23 - 10 June 23</p>
            </div> */}
      {/* <div className="c1" id='cd3'>
                <div className="pic3"></div>
                <h3>Code Contest 3</h3>
                <p>2 June 23 - 10 June 23</p>
            </div> */}
      {/* </div> */}
      {/* <a href="./#home"> view more events... </a> */}
      {/* <Card name="HackTU"/> */}
      <div className="cards">
        {objectArr.map((i) => (
          <Card name={i.name} desc={i.desc} key={i} />
        ))}

        {
          // picarray.map( (i) => )
        }
      </div>
      <button onClick={FDB}>Please Click it!</button>
    </div>
  );
};

export default Event;
