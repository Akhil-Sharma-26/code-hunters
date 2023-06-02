import React from 'react'
import vg from "../Assets/2.webp"

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
          <h1>MyHerupa 2</h1>
          <p>Your one stop solution to all college needs</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Vector" />
    </div>
    </>
  )
}

export default Home