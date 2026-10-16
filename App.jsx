
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
              src="https://cdn.prod.website-files.com/64247ee2293b8621e454f004/69ccbd2f74a9e2a171c0974b_goats-in-the-green-grass-are-eating-grass-2026-01-08-07-50-33-utc.jpg"
              alt="Website project"
            />
            <h3>My Animal Farm</h3>
            <p>A simple page about my animals, how I take care of them, and my daily farm activities.</p>
          </div>

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsN0dd0H7LbfErcOqpufuCWrQkcfpWjeiZAhciyGpEXw&s=10"
              alt="Product system"
            />
            <h3>My favorite Recipe</h3>
            <p>my favorite recipes and cooking experiences, showcasing the dishes I enjoy making.</p>
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
