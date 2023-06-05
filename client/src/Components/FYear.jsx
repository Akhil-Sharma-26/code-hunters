import React from 'react'
import Selector from './Selector'

const FYear = () => {

    const subjectarray = [
        'Bio-technology',
        'Pool A',
        'Pool B',
        'CSE Branch',
        'COBS Branch'
    ]

  return (
    <div className="body1">
        <h1 className="select">Select Your Branch/Pool</h1>
        <div className="Cards">
            {
                subjectarray.map( (i) => (
                    <Selector name = {i} key={i} />
                ))
            }
        </div>
    </div>
  )
}

export default FYear