import React from 'react'
import vg from "../Assets/2.webp"
// import vg from "../Assets/book-stack.png"


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
            {/* <img src={vg} alt="Vector" />
            <div>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, accusamus asperiores perferendis facilis, distinctio hic animi natus error tempora, officiis facere quod sapiente a odio magnam minima dolorem pariatur amet excepturi voluptates quo modi expedita incidunt? Quos tenetur veniam nostrum eum numquam rerum! Inventore quis, id iure modi quasi quam, dolorem, animi iste itaque enim perspiciatis et? Nesciunt est optio aspernatur similique accusantium repudiandae beatae vero iure magnam fugiat dicta enim laborum quisquam numquam, molestiae dolor quo, autem quia unde! Perspiciatis laudantium architecto vitae impedit provident sit exercitationem magni natus doloremque, iusto libero numquam recusandae odio deserunt dolorem suscipit sed!</p>
            </div> */}
            <div className="note1">
                  <div className="pic1"></div>
                  <h5>First year</h5>
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
    {/* <div className="home3" id="about">
      <div>
        <h1>Who we are ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non iusto debitis! Dignissimos, nulla aliquam in blanditiis impedit harum a ratione ducimus ipsum tempore suscipit error voluptatum non, repudiandae expedita. Deserunt dolorem asperiores explicabo nulla, necessitatibus qui ex tempora corrupti eos expedita harum beatae blanditiis accusamus fuga cum adipisci, natus numquam? Quae, fuga cupiditate? Incidunt dolores voluptates optio dicta laborum vel placeat temporibus, a delectus officia doloremque dignissimos deserunt, harum quisquam laudantium, ut nam laboriosam commodi repellat tempore ipsam odio. Quam similique, ullam ratione ipsa a error cupiditate? Possimus totam neque, a ipsam laudantium eligendi quae molestiae iure deleniti accusantium?
        </p>
      </div>
    </div> */}
    <div className="home3" id="about">
        <div className='box'>
            <div className="note1">
                  <div className="pic1"></div>
                  <h5>First year</h5>
            </div>
            <div className="note2">
                  <div className="pic2"></div>
                  <h5>Second Year</h5></div>
            {/* <div className="note3">
                  <div className="pic3">
                  </div>
                  <h5>Third year</h5></div> */}
        </div>
        <div className='sidenote'>
              Financial <br/> Assistance
        </div>
      </div>
    <div className="home4" id="aboutus">
      <div>
      <h1>
        Contributors
      </h1>
      <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique non beatae laboriosam dolorem iste, exercitationem nostrum a ad tempora tenetur, deleniti alias fugiat, aut quibusdam velit! Nihil, dolorum quidem, totam exercitationem itaque voluptatum animi cumque sit, ab vel laboriosam molestias arc
      </article>
      </div>
    </div>
    </>
  )
}

export default Home