import React from 'react'
import Selector from './Selector'

const SYear = () => {

    const branchArray = [
'Computer Science','Chemical','Electrical','Civil','Electronics & Communication','Production','BioTechnology','Mechanical','Mechatronics','Electronics & Computer','Electronics & Instrumentaion'
    ]

  return (
    <div className="bodySecondYear">
        <h1 className="select">Select Your Branch</h1>
        <div className="Cards">
            {
                branchArray.map( (i) => (
                    <Selector name = {i} key={i} />
                ))
            }
        </div>
    </div>
  )
}

export default SYear