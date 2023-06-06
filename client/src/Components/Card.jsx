import React from "react";
// import "../Styles/Card.scss"

const Card = (props) => {
  return (
    <>
    <div className="body">
        <div className="logo"></div>
        <h3 className="name">{props.name}</h3>
        <p className="description">{props.desc}</p>
    </div>
    </>
  )
}

export default Card