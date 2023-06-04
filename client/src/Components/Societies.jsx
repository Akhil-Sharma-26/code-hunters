import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Societies.scss";
import Header from "./Header";

const Societies = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const societies = [
    {
      id: 1,
      name: 'Creative Coding Society',
      imgSrc: '../Assets/ccs_logo',
    },
    {
      id: 2,
      name: 'ENACTUS',
      imgSrc: '../Assets/enactus_logog.png',
    },
    {
      id: 3,
      name: 'Thapar Amatuare Astronomical Society',
      imgSrc: '../Assets/taas_logo.png',
    },
    {
      id: 4,
      name: 'ACM',
      imgSrc: '../Assets/ccs_logo',
    },
    {
      id: 5,
      name: 'MLSC',
      imgSrc: '../Assets/enactus_logog.png',
    },
    {
      id: 6,
      name: 'OWasp',
      imgSrc: '../Assets/taas_logo.png',
    },
    {
      id: 7,
      name: 'Fateh',
      imgSrc: '../Assets/taas_logo.png',
    },
    {
      id: 8,
      name: 'Echos',
      imgSrc: '../Assets/taas_logo.png',
    },
    {
      id: 9,
      name: '',
      imgSrc: '../Assets/taas_logo.png',
    },
  ];

  return (
    <>
    <div className='background'>  
      <div className='societies'>
        <h1>Societies</h1>
        <div className="cards">
          {societies.slice(0, 3).map((society) => (
            <div className="c1" key={society.id}>
              <div className="pic">
                <img src={society.imgSrc} alt={society.name} />
              </div>
              <h3>{society.name}</h3>
            </div>
          ))}
        </div>
        {showMore && (
          <div className="cards">
            {societies.slice(4, 9).map((society) => (
            <div className="c1" key={society.id}>
              <div className="pic">
                <img src={society.imgSrc} alt={society.name} />
              </div>
              <h3>{society.name}</h3>
            </div>
          ))}
          </div>
        )}
        <div className="show-more">
          <button onClick={toggleShowMore} className="show-more-link">
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Societies;