
import "./style.css";

function App() {
  return (
    <div>
      <nav>
        <h3>My Portfolio.</h3>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#connect">Connect</a>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="circle">
         <img
  src="src/assets/ROWI KYUT.jpg"
  alt="My profile"
  className="profile-picture"
/>
        </div>

        <span className="tag tag1">🐐 Animal Lover</span>
        <span className="tag tag2">🗺️ Adventure Seeker</span>
        <span className="tag tag3">💻 IT Student</span>

        <p className="small">HELLO, I'M</p>
        <h1>Ronald William Cabrera</h1>
        <h3>I'm an IT Student </h3>
        <p>
          Hi! Welcome to my personal website! 
          I'm an IT student learning new things 
          about technology and doing my best to 
          improve my coding skills. Take a look 
          at my projects, and get to know me better!
        </p>
        <a className="button" href="#project">My Projects ↗</a>
      </section>

      <section className="section" id="about">
        <p className="small">A LITTLE ABOUT ME</p>
        <h2>About Me</h2>
        <p>
          Hi! I'm Ronald William Cabrera, an Information 
          Technology student who loves taking care of animals,
          eating good food, and going on adventures. 
          I also enjoy exploring new places and learning new things whenever I can.
        </p>
        <p><b>My Skills:</b> Web Development, Animal Care, Gardening and Planning, Cooking.</p>
      </section>

      <section className="section" id="project">
        <p className="small">MY WORKS</p>
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <img
              src="src/assets/musicplaylist.jpg"
              alt="Music PlayList"
            />
            <h3>Music PlayList</h3>
            <p>A simple website where users can explore their favorite songs and enjoy music from different artists.</p>
          </div>

          <div className="card">
            <img
              src="src/assets/personalwesite.jpg"
              alt="My Personal Website"
            />
            <h3>My Personal Website</h3>
            <p>A personal website where I share my background, skills, interests, and projects as an IT student.</p>
          </div>
        </div>
      </section>

      <section className="section connect" id="connect">
        <p className="small">LET'S CONNECT</p>
        <h2>Get in Touch!</h2>
        <p>Let's connect! I'm friendly and always happy to meet new people.</p>
        <a href="mailto:your@email.com" className="button">
          Send Me an Email ↗
        </a>
        <p>
          <a href="https://github.com/">GitHub</a> |
          {" "}
          <a href="https://facebook.com/">Facebook</a>
        </p>
      </section>

      <footer>
        <p>© 2026 My Portfolio. Made with care.</p>
      </footer>
    </div>
  );
}

export default App;
