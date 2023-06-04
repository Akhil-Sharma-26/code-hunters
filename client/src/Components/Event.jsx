import React from 'react'
import Card from './Card'

const Event = () => {

    const array = [ 'HackTU', 'ImagineCup' , 'GSoC', 'NewEvent' , 'a' , 'a' , "a"]

  return (
    <div className='event'>
        <h1>Events</h1>
        
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
        <div className='cards'> 
        {
            array.map((i) => (
                <Card name={i} key={i}/>
            ))
        }
        </div>
    </div>
  )
}

export default Event