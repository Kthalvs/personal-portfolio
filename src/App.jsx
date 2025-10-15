import { useState } from 'react'
import './App.css'

function App() {
  // 1. New State for Menu Visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Function to toggle the menu state and apply/remove CSS class to <body>
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // CRITICAL: Apply the class to the document body, which the CSS uses for shifting
    if (newState) {
      document.body.classList.add('is-menu-visible');
    } else {
      document.body.classList.remove('is-menu-visible');
    }
  };

  // The 'count' state is not used for the portfolio, but is left here
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ======================================================= */}
      {/* 3. BURGER ICON ELEMENT - Must be outside #header and #main */}
      <div className="menu-button-wrapper">
        <div className="top-menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          {/* Burger lines */}
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Header (Side Menu) */}
      <div id="header">
        <div className="top">
          {/* Logo */}
          <div id="logo">
            <span className="image avatar48">
              <img src="images/profile01.png" alt="Kathline Avatar" />
            </span>
            <h1 id="title">Kathline Alvarado</h1>
            <p>BS Information Systems 3rd Year</p>
          </div>

          {/* Nav - Add onClick to close menu on link click */}
          <nav id="nav">
            <ul>
              <li><a href="#top" onClick={toggleMenu}><span className="icon solid fa-home">Intro</span></a></li>
              <li><a href="#biography" onClick={toggleMenu}><span className="icon solid fa-user">Biography</span></a></li>
              <li><a href="#projects" onClick={toggleMenu}><span className="icon solid fa-th">Projects</span></a></li>
              <li><a href="#skills" onClick={toggleMenu}><span className="icon solid fa-cogs">Skills</span></a></li>
              <li><a href="#resume" onClick={toggleMenu}><span className="icon solid fa-file">Resume</span></a></li>
              <li><a href="#contact" onClick={toggleMenu}><span className="icon solid fa-envelope">Contact</span></a></li>
            </ul>
          </nav>
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
                I’m an aspiring <strong>Software Quality Assurance (SQA) Tester</strong> with a goal to ensure systems work perfectly and efficiently.
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
            <p>Here are some of my academic works and personal projects accomplishments.</p>
            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="https://github.com/Kthalvs/notes-app"
                    className="image fit"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src="images/pic01.png" alt="Notes App" />
                  </a>
                  <header>
                    <h3>Notes App</h3>
                  </header>
                </article>
              </div>

              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="https://www.figma.com/proto/QN1ciWkcKIMqVOS6GO8UAq/DreamLog?node-id=183-12&starting-point-node-id=183%3A12&t=tDTr1jlfsT8M0bD2-1"
                    className="image fit"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src="images/pic02.png" alt="DreamLog" />
                  </a>
                  <header>
                    <h3>DreamLog</h3>
                  </header>
                </article>
              </div>

              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="https://www.figma.com/proto/MX0IY7R1B4ukfA0QywvQiy/PRACTICAL_ALVARADO_BSIS2?node-id=10-5&starting-point-node-id=10%3A5"
                    className="image fit"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src="images/pic03.png" alt="SnapEats Delivery App" />
                  </a>
                  <header>
                    <h3>SnapEats Delivery App</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="four">
          <div className="container">
            <header><h2>Technical Skills</h2></header>
            <p>
              • Basic programming (PHP, Laravel, Figma, HTML5, VS Code) <br />
              • Problem Solving & Collaboration <br />
            </p>

            <header><h2>Soft Skills</h2></header>
            <p>
              • Time Management <br />
              • Communication and Teamwork <br />
              • Problem Solving & Collaboration <br />
              • Adaptability and Continuous Learning <br />
            </p>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="five">
          <div className="container">
            <header><h2>Resume</h2></header>
            <p>Click below to view or download my resume.</p>
            <a href="https://drive.google.com/file/d/12-9t28Zxxg2jO-lr1AJHtuXgSl82_Y_M/view?usp=sharing"
              className="button"
              target="_blank"
              rel="noopener noreferrer">View My Resume
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="six">
          <div className="container">
            <header><h2>Contacts</h2></header>
            <p>Let’s connect! I’m always open to new learning opportunities and collaborations.</p>

            {/* Social Icons */}
            <div className="bottom">
              <ul className="icons">
                <li>
                  <a href="https://www.facebook.com/kathlinejoy.alvarado./" target="_blank" rel="noopener noreferrer" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kthalvs" target="_blank" rel="noopener noreferrer" className="icon brands fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kathline-joy-alvarado-15325a301/" target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvaradokathline@gmail.com" className="icon solid fa-envelope" target="_blank" rel="noopener noreferrer">
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </div>
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
