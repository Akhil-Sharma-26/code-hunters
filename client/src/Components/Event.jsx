import React from 'react'

const Event = () => {
  return (
    <div className='event'>
        <h1>Events</h1>
        <div className="cards">
            <div className="c1" id='cd1'>
                <div className="pic1"></div>
                {/* <hr/> */}
                <h3>Microsoft Imagine Cup</h3>
                <p>2 June 23 - 10 June 23</p>
            </div>
            <div className="c1" id='cd2'>
                <div className="pic2"></div>
                <h3>Google Summer of Code</h3>
                <p>2 June 23 - 10 June 23</p>
            </div>
            <div className="c1" id='cd3'>
                <div className="pic3"></div>
                <h3>Code Contest 3</h3>
                <p>2 June 23 - 10 June 23</p>
            </div>
        </div>
        <a href="./#home"> view more events... </a>
    </div>
  )
}

export default Event