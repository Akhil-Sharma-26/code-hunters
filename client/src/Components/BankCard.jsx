import React from 'react'

const BankCard = ( props ) => {
  return (
    <div className='bankCard'>
        <div className="photo"></div>
        <div className="content">
            <h2 className="name">{props.name}</h2>
            <h4 className="services">
                <h5 className="service">Student Loans</h5>
                <h5 className="service">0 Balance Credit Cards</h5>
                <h5 className="service">Student Saveing Accounts</h5>
            </h4>
            <h4 className="address">Add.: &nbsp; {props.addr}</h4>
        </div>
    </div>
  )
}

export default BankCard