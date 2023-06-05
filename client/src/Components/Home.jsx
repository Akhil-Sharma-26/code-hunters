import React from 'react'
import vg from "../Assets/2.webp"
import Firstyear from './First_year'
// import vg from "../Assets/book-stack.png"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
          <h1>MyHerupa 2</h1>
          <p>Your one stop solution to all college needs</p>
        </main>
    </div>
      <div className="home2" id="notes">
        <div className='sidenote'>
              Notes
        </div>
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5><a>First year</a></h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5>Second Year</h5></div>
            <div className="note3">
                  <div className="pic3">
                  </div>
                  <h5>Third year</h5></div>
            </div>
      </div>
    <div className="home3" id="finance">
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5>Bank & Loans</h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5>Scholarships</h5></div>
        </div>
        <div className='sidenote'>
        <Link to={"*"}>Financial<br/>Assistance</Link>
        </div>
      </div>
      <div className="home4" id="societies">
        <div className='sidenote' title='Click here to view more'>
              <Link to={"/societies"}>Societies</Link>
              
        </div>
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5>
                        <a href="https://ccstiet.com" target='blank'>CCS<br/>Creative Computing Society</a>
                  </h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5>
                        <a href="https://sites.google.com/thapar.edu/taas/home">TAAS</a>
                  </h5>
            </div>
            {/* <div className="note3">
                  <div className="pic3">
                  </div>
                  <h5>Third year</h5></div> */}
            </div>
      </div>
      <div className="home5" id="events">
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5>Microsoft Imagine Cup</h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5>Google Summer of Code</h5>
            </div>
            <div className="note3">
                  <div className="pic3"></div>
                  <h5>Coding Ninjas</h5>
            </div>
        </div>
        <div className='sidenote'>
            <Link to={"/events"}>Events</Link>
        </div>
      </div>
      <div className="home6" id="aboutus">
        <div className='sidenote' title='Click here to view more'>
              <Link to={"/societies"}>About Us</Link>
        </div>
        <div className='box'>
            <p>Welcome to our educational website! We are a dedicated platform committed to supporting students on their educational journey. We offer a wide range of resources, including valuable notes generously shared by seniors, to help you succeed academically.We understand that financial challenges can often hinder educational pursuits. That's why we provide comprehensive financial guidance, empowering you to navigate the complex world of scholarships, grants, and other financial aid options.In addition to academic support and financial guidance, we believe in the power of community and collaboration, that's why we provide you with the news of all the events that are going on-campus and off-campus.Hope this website may suffice your all college needs :)</p>
        </div>
      </div>
    </>
  )
}

export default Home