import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Societies.scss"
// import "../Styles/Societies.css"
import Header from "./Header"
const Societies = () => {
    return (
      <>  
      <div className='societies'>
          <h1>Societies</h1>
          <div className="cards">
              <div className="c1">
                  <div className="pic">
                    <img src="../Assets/ccs_logo" alt="ccs"  />
                  </div>
                  {/* <hr/> */}
                  <h3>Creative Coding Society</h3>
              </div>
              <div className="c1">
                  <div className="pic">
                    <img src="../Assets/enactus_logog.png" alt="enactus" />
                  </div>
                  <h3>ENACTUS</h3>
              </div>
              <div className="c1">
                  <div className="pic">
                    <img src="../Assets/taas_logo.png" alt="taas" className=''/>
                  </div>
                  <h3>Thapar Amatuare Astronomical Society</h3>
              </div>
              
              
          </div>
            <div className="show-more">
            <Link to="/more" className="show-more-link">Show more</Link>
            </div>
      </div>
      
      </>
    )
  }
  <Header/>
  export default Societies