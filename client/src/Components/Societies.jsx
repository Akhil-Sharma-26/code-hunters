import React from 'react'
import "../Styles/Societies.scss"
const Societies = () => {
    return (
      <>  
      <div className='societies'>
          <h1>Societies</h1>
          <div className="cards">
              <div className="c1">
                  <div className="pic"></div>
                  {/* <hr/> */}
                  <h3>Society1</h3>
              </div>
              <div className="c1">
                  <div className="pic">Picture</div>
                  <h3>Society2</h3>
              </div>
              <div className="c1">
                  <div className="pic">Picture</div>
                  <h3>Society3</h3>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Societies