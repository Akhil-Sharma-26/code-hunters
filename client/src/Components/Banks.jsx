import React, {useState} from 'react'
import BankCard from './BankCard'


const Banks = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };
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
    <>
    <div className={isDarkTheme ? 'bodyBank' : 'bodyBankDark'}>
    {/* <button
    //   className={isDarkTheme ? 'dark' : 'light'} // Apply the theme class dynamically
      onClick={handleThemeToggle}
    >Dark Mode</button> */}
        {
            bankArray.map( (i) => (
                <BankCard name = { i.name } addr = { i.addr } />
            ))
        }
    </div>
    </>
  )
}

export default Banks