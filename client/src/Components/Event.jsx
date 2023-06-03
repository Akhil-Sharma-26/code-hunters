import React from 'react'

const Event = () => {
  return (
    <div className='event'>
        <h1>Events</h1>
        <div className="cards">
            <div className="c1">
                <div className="pic">Picture</div>
                {/* <hr/> */}
                <h3>Event1</h3>
            </div>
            <div className="c1">
                <div className="pic">Picture</div>
                <h3>Event2</h3>
            </div>
            <div className="c1">
                <div className="pic">Picture</div>
                <h3>Event3</h3>
            </div>
        </div>
    </div>
  )
}

export default Event