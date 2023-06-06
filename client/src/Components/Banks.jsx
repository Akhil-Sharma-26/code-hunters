import React from 'react'
import BankCard from './BankCard'

const Banks = () => {

    const bankArray = [
        {
            name : "ICICI Bank",
            addr : "Near G-Block Canteen"
        },
        {
            name : "SBI Bank",
            addr : "Near G-Block Cafetaria"
        }
    ]

  return (
    <div className='bodyBank'>
        {
            bankArray.map( (i) => (
                <BankCard name = { i.name } addr = { i.addr }/>
            ))
        }
    </div>
  )
}

export default Banks