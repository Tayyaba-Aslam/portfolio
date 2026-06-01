import { useEffect } from 'react';
import  AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
function App(){
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once:false,
      mirror:true,

  });
}, []);
  return(
    <div className="app-container">
   <nav className="navbar">
   <div className="logo">Tayyaba Aslam</div>
   <div className="nav-links">
    <a href="#Home">Home</a>
    <a href="#Skills">Skills</a>
    <a href="#Projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
   </nav>
   <div className="hero" id="Home">
    <h1>Crafting Digital Experience That Matter</h1>
    <p>Hi, I am Tayyaba Aslam. A Passionate Frontend Web Developer focused on buillding  beautiful, interactive and user friendly websites.</p>
    <button className="cta-btn">Explore My Projects</button>
   </div>
   <section className="about-section" id="Skills">
    <div className="about-content">
      <h2>About Me</h2>
      <p className="about-text">I am a BS Data Science graduate with a growing passion for Frontend Web Development. I specialize in building responsive,interactive and user friendly we applications using HTML,CSS ,JavaScript, React.js.I enjoy transforming ideas into clean and fuctional digital experiences while continuously expanding my technical skills and knowledge.  </p>
    </div>
    <div className="education-block">
      <h2>Education</h2>
      <div claseName="education items">
        <p className="edu-tittle"> BS Data Science</p>
        <p className="edu-sub"> University Of Okara(2021-2025)</p>
      </div>
       </div>
       <div className="Skills-container">
        <h2>Core Skills</h2>
        <div className="skills-grid">
       <div className="skill-box">HTML5</div>
       <div className="skill-box">CSS3</div>
       <div className="skill-box">JavaScript</div>
       <div className="skill-box">React.js</div>
       </div>
     </div>
     </section>
     <section className="projects-section" id="Projects">
      <div className="projects-wrapper">
        <h2 className="projects-heading"> My Projects</h2>
        <p className="projects-sub-text"> Here are some of the web Development projects I have built.</p>
        <div className="projects-grid">
          <div className="project-cards">
            <div className="project-info">
              <h3>Personal Portfolio</h3>
              <p>A modern ,responsive portfolio webbsite built using React.js and custom css to showcase my skills and education</p>
              <div className="project-tags">
                <span>React.js</span>
                <span>CSS3</span>
              </div>
            </div>

          </div>
          <div className="project-cards">
            <div className="project-info">
              <h3>Data Insight Dashboard</h3>
              <p>A conceptual frontend layout design to dispaly data science, matrics ,charts, and user analytics beautifully.</p>
              <div className="project-tags">
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>Data Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-heading"> Get In Touch</h2>
        <p className="contact-sub-text">Have a project in mind or want to chat? Feel free to drop a message!</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="connect-sub-text">Feel free contact me via email or through social media platforms. I am always open to discuss new projects or opportunitties!</p>
            <div className="info-details">
              <div className="info-item">
              <span className="info-icon">📧</span>
              <span className="info-text"> tayyabajutt835@gmail.com</span>
              </div>
              <div className="info-item">
              <span className="info-icon">📍</span>
              <span className="info-text">Lahore,Punjab,Pakistan</span>
              </div>
              

            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tayyaba-aslam-" target="-blank" rel="noreferrer" className="social-icon linkedin-btn">Linkedin </a>
              <a href="https://github.com/Tayyaba-Aslam" rel="noreferrer" target="_blank" className="social-icon github-btn"> GitHub</a>
            </div> 
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e)=> e.preventDefault}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your email" required ></input>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea row="5" placeholder="your message"required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

        </div>

      </div>
     </section>
     <footer className="footer">
      <p>&copy; 2026 Tayyaba Aslam. All Rights Reserved.</p>
      <p>Built with React.js and custom CSS</p>
     </footer>
     </div>
    

  
  

  
  
   
  )
}
export default App;
