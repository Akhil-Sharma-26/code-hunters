import React from "react";
import "../Styles/Card.scss"

const Card = (props) => {
  return (
    <>
    <div className="body">
        <div className="logo"></div>
        <h3 className="name">{props.name}</h3>
        <p className="description">Creative computing Society is back with HackTU, flagship event to be hosted at Thapar Institute of Engineering and Technology, Patiala and we're excited to see what new and exciting ideas will come out of this year's event.</p>
    </div>
    </>
  )
}

export default Card