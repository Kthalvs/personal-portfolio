import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <div id="header">
        <div className="top">
          {/* Logo */}
          <div id="logo">
            <span className="image avatar48">
              <img src="images/profile.png" alt="Kathline Avatar" />
            </span>
            <h1 id="title">Kathline Alvarado</h1>
            <p>BS Information Systems 3rd Year</p>
          </div>

          {/* Nav */}
          <nav id="nav">
            <ul>
              <li><a href="#top"><span className="icon solid fa-home">Intro</span></a></li>
              <li><a href="#biography"><span className="icon solid fa-user">Biography</span></a></li>
              <li><a href="#projects"><span className="icon solid fa-th">Projects</span></a></li>
              <li><a href="#skills"><span className="icon solid fa-cogs">Skills</span></a></li>
              <li><a href="#resume"><span className="icon solid fa-file">Resume</span></a></li>
              <li><a href="#contact"><span className="icon solid fa-envelope">Contact</span></a></li>
            </ul>
          </nav>
        </div>

        <div className="bottom">
          {/* Social Icons */}
          <ul className="icons">
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="#" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
          </ul>
        </div>
      </div>

      {/* Main */}
      <div id="main">

        {/* Intro */}
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>Kathline Alvarado</strong>.
              </h2>
              <p>
                A dedicated <strong>BS Information Systems student</strong> passionate about 
                technology, quality assurance, and user experience. 
                I’m an aspiring <strong>Software Quality Assurance (SQA) Tester</strong> 
                with a goal to ensure systems work perfectly and efficiently.
              </p>
            </header>
            <footer>
              <a href="#projects" className="button scrolly">View My Projects</a>
            </footer>
          </div>
        </section>

        {/* Biography */}
        <section id="biography" className="two">
          <div className="container">
            <header>
              <h2>Biography</h2>
            </header>
            <p>
              I’m currently a 3rd-year BS Information Systems student who enjoys exploring how software works — and how to make it better.
              My journey in tech started with curiosity and grew into a passion for testing, debugging, and improving user experiences.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="three">
          <div className="container">
            <header>
              <h2>Projects</h2>
            </header>
            <p>Here are some of my academic and personal projects that reflect my skills in web development and system analysis.</p>
            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic02.jpg" alt="Project 1" /></a>
                  <header><h3>Portfolio Website</h3></header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic03.jpg" alt="Project 2" /></a>
                  <header><h3>System Testing Demo</h3></header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic04.jpg" alt="Project 3" /></a>
                  <header><h3>UI Evaluation App</h3></header>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="four">
          <div className="container">
            <header><h2>Skills</h2></header>
            <p>
              • Software Testing (Manual) <br />
              • Bug Reporting & Documentation <br />
              • Web Development (HTML, CSS, JavaScript, React) <br />
              • Problem Solving & Collaboration
            </p>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="five">
          <div className="container">
            <header><h2>Resume</h2></header>
            <p>Click below to view or download my resume.</p>
            <a href="#" className="button">Download Resume</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="six">
          <div className="container">
            <header><h2>Contact</h2></header>
            <p>Let’s connect! I’m always open to new learning opportunities and collaborations.</p>
            <form method="post" action="#">
              <div className="row">
                <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                <div className="col-12"><textarea name="message" placeholder="Message" /></div>
                <div className="col-12"><input type="submit" defaultValue="Send Message" /></div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div id="footer">
        <ul className="copyright">
          <li>© 2025 Kathline Alvarado. All rights reserved.</li>
          <li>Designed with ❤️ using React & Vite</li>
        </ul>
      </div>
    </>
  )
}

export default App
