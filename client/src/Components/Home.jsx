import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Home = () => {

      const [dd1, setdd1] = useState(true);
      const toggle = () => {
            setdd1(!dd1);
      }
  return (
    <>
    <div className='home' id='home'>
        <main>
            <div className="image"></div>
           <h1>MyHerupa 2</h1>
           <p>Your one stop solution to all college needs</p>
            <div>
               <button>Login</button>
               <button>Register</button>
            </div>
            <a href="/cgpa">
               <button>CGPA Calculator</button>
               </a>
        </main>
    </div>


      <div className="home2" id="notes">
        <div className='sidenote'>
        <Link to={"/firstyear"}>Notes</Link>
        </div>
        <div className="sidenote_mobile">
            <button onClick={toggle} className='notes'>Notes</button>
            <div className={dd1 ? 'show' : 'hide'}>
            <Link to={'/firstyear'}>FirstYear</Link>
            <Link to={"/secondyear"} className='link'>Second Year</Link>
            <Link to={"/thirdyear"} className='link'>Third Year</Link>
            </div>
        </div>
        <div className='box'>
            <Link to={'/firstyear'} className='link'>
                  <div className="note1">
                        <div className="pic1"></div>
                        <h5><Link to={'/firstyear'}>FirstYear</Link></h5>
                  </div>
            </Link>
            <Link to={"/secondyear"} className='link'>
                  <div className="note2">
                        <div className="pic2"></div>
                        <h5><Link to={"/secondyear"} className='link'>Second Year</Link></h5>
                  </div>
           </Link>
           <Link to={"/thirdyear"} className='link'>
                  <div className="note3">
                        <div className="pic3"></div>
                        <h5><Link to={"/thirdyear"} className='link'>Third Year</Link></h5>
                  </div>
            </Link>
        </div>
            
      </div>
    <div className="home3" id="finance">
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5><Link to={"/banks"}>Banks & Loans</Link></h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5><a href="https://thapar.edu/upload/files/SCHOLARSHIP%20POLICY%202023-24.pdf">Scholarships</a></h5></div>
        </div>
        <div className='sidenote'>
        <Link to={"/finance"}>Financial Assistance</Link>
      
        </div>
      </div>
      <div className="home4" id="societies">
        <div className='sidenote' title='Click here to view more'>
              <Link to={"/societie"}>Societies</Link>
              
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