import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

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
      imgSrc: './Assets/ccs_logo',
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
        {
            societies.slice(0, 3).map( (i) => (
            <Card name={i.name} desc={i.imgSrc} img={i.imgSrc}  key={i.id} />
            ))
        }
        </div>
        <div className='moreCards'>
            {   
                showMore && (
                societies.slice(4, 9).map( (i) => (
                <Card name={i.name} desc={i.imgSrc} key={i.id}/>
                )))
            }
        </div>
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