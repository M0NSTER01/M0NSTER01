import { useState, useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Typed from 'typed.js'

function App() {
    const [count, setCount] = useState(0)
    const typedElementRef = useRef(null);

    useEffect(() => {
      // Initialize Typed.js after component mounts
      const typed = new Typed(typedElementRef.current, {
          strings: ['Gamer', 'YouTuber', 'Web Designer', 'Web Developer'],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
      });

      // Clean up on unmount
      return () => {
          typed.destroy();
      };
  }, []);

  const visitgithub = () => {
      window.location.href = "https://github.com/M0NSTER01";
  };

    return (
        <>

            <title-nav>
                <div class="title-logo">Raghav's Portfolio</div>
                <div class="title-nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </div>
            </title-nav>
            <main>
                <section class="first">
                    <div class="first-info">
                        Hi, My name is <span class="name-color">Raghav</span>
                        <div>and I am a passionate </div>
                        <span id="element" ref={typedElementRef}></span>

                        <div class="buttons">
                            <button class="button">Download Resume</button>
                            <button class="button" id="visit-github" onClick={visitgithub}>Visit GitHub</button>
                        </div>
                    </div>
                    <div class="first-image">
                        <img src="/develop-image.png" alt="" id="develop-image" />

                    </div>
                </section>
                <hr />
                <section className="Technologies">
                    <div className="tech-title">
                        MY KNOWLEDGE OF
                        <div className='tech-titlemain'>Technologies.</div>
                    </div>
                    <div className="tech-list">
                        <div className="tech-card">
                            <img src="/HTML.png" alt="" className='tech-img' />
                            <div className="tech-name">HTML 5</div>
                        </div>

                        <div className="tech-card">
                            <img src="/CSS.png" alt="" className='tech-img' />
                            <div className="tech-name">CSS 3</div>
                        </div>

                        <div className="tech-card">
                            <img src="/JAVASCRIPT.png" alt="" className='tech-img' />
                            <div className="tech-name">Java Script</div>
                        </div>

                        <div className="tech-card">
                            <img src="/TYPESCRIPT.png" alt="" className='tech-img' />
                            <div className="tech-name">TypeScript</div>
                        </div>

                        <div className="tech-card">
                            <img src="/C.png" alt="" className='tech-img' />
                            <div className="tech-name">C</div>
                        </div>

                        <div className="tech-card">
                            <img src="/JAVA.png" alt="" className='tech-img' />
                            <div className="tech-name">Java</div>
                        </div>

                        <div className="tech-card">
                            <img src="/PYTHON.png" alt="" className='tech-img' />
                            <div className="tech-name">Python</div>
                        </div>

                        <div className="tech-card">
                            <img src="/GITHUB.png" alt="" className='tech-img' />
                            <div className="tech-name">GitHub</div>
                        </div>

                        <div className="tech-card">
                            <img src="/REACT.png" alt="" className='tech-img' />
                            <div className="tech-name">React</div>
                        </div>

                        <div className="tech-card">
                            <img src="/FIREBASE.png" alt="" className='tech-img' />
                            <div className="tech-name">Fire Base</div>
                        </div>

                        <div className="tech-card">
                            <img src="/MYSQL.png" alt="" className='tech-img' />
                            <div className="tech-name">MYSQL</div>
                        </div>

                        <div className="tech-card">
                            <img src="/MONGO.png" alt="" className='tech-img' />
                            <div className="tech-name">MONGO</div>
                        </div>
                    </div>
                </section>
                <hr />
                <section class="projects">
                    <div class="projects-title">
                        MY WORK
                        <div className="projects-titlemain">Projects.</div>
                    </div>
                    <div class="project-list">

                        <div class="project-card">
                            <img src="/GARCIA.png" alt="" className='project-img' />
                            <span id="project-title"><b>GARCIA</b></span>
                            <div class="project-description">
                                Gracia is a personal style recommendation website designed specifically for women. It analyzes
                                your body shape to offer personalized advice on the best accessories and dresses that enhance
                                your natural beauty.
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="/Medi_bot.png" alt="" className='project-img' />
                            <span id="project-title"><b>Medi_Bot</b></span>
                            <div class="project-description">An ML driven Online Doctor. Which can predict diseases based on
                                symptoms and can recommend you cure and which doctor to prefer.</div>
                        </div>

                        <div class="project-card">
                            <img src="/Banking System.png" alt="" className='project-img' />
                            <span id="project-title"><b>Banking System - Java</b></span>
                            <div class="project-description">
                                This robust Java-based banking system streamlines everyday financial operations by supporting
                                essential features such as deposits, withdrawals, fund transfers, and a comprehensive passbook
                                for tracking transactions. It incorporates secure login capabilities for both users and
                                administrators, ensuring that each role receives tailored access and management privileges for
                                an efficient banking experience
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="/Music Spot.png" alt="" className='project-img' />
                            <span id="project-title"><b>MUSIC SPOT</b></span>
                            <div class="project-description">
                                This project is a simple music app that displays a list of songs in a card layout. Each card
                                represents a music track that you can click on to listen, offering an intuitive and
                                straightforward way to explore your favorite tunes.
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer>
                <div class="footer-rights">Copyright &#169; www.raghavsportfolio.com | All rights reserved</div>
            </footer>

        </>
    )
}

export default App
