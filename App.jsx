import ronaldImage from "./assets/ronald.jpg";
import "./style.css";

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Gabify &lt;&gt;</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Connect</a>
        </div>
      </nav>

      {/* Section 1: Home */}
      <section id="home" className="section home-section">
        <div className="profile-container">
          <img src={ronaldImage} alt="Ronald" className="profile-img" />
        </div>
        <div className="home-content">
          <p className="greeting">Hi There!</p>
          <h1>I'm Ronald</h1>
          <p className="role">Software Developer | Web Developer | Graphic Artist | Computer Technician</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias velit esse quidem ducimus dolorem non est totam accusamus eos!
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="section-subtitle">Get to know more about who I am</p>
        <div className="content-box">
          <p>
            I am a passionate developer and tech enthusiast dedicated to creating clean, functional, and visually appealing web applications and designs.
          </p>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A web application built using modern frontend technologies.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>An administrative management and ordering system.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Connect */}
      <section id="connect" className="section">
        <h2>Connect</h2>
        <p className="section-subtitle">Let's get in touch and build something together</p>
        <div className="connect-box">
          <p>Email: ronald@example.com</p>
          <p>GitHub / Social Media Links</p>
        </div>
      </section>
    </div>
  );
}

export default App;
