import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TypingText from './components/TypingText';
import useScrollReveal from './hooks/useScrollReveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUser, faEnvelope, faPencilAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  useScrollReveal(); // Initialize the scroll reveal effect

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevents the default form submission behavior
    try {
      // Attempt to send a POST request to the server
      const response = await fetch('/api/message', {
        method: 'POST', // Specifies the request method
        headers: {
          'Content-Type': 'application/json', // Sets the content type header so the server knows it's receiving JSON data
        },
        body: JSON.stringify(contactForm), // Sends the contactForm object as JSON in the request body
      });
  
      const responseData = await response.json(); // Parses the JSON response body
      if (response.ok) { // Checks if the HTTP response status code is 2xx
        alert('Message sent successfully!'); // Alert on successful submission
        setContactForm({ name: '', email: '', message: '' }); // Clear the form fields
      } else {
        // Throws an error if the response was not ok
        throw new Error(responseData.message || 'Failed to send message.');
      }
    } catch (error) {
      // Catches any errors in the fetch operation or response handling
      console.error('Failed to send message:', error);
      alert(error.message);
    }
  };
  
  // Navigation items as an array of objects
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#languages" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="App">
      <Navbar navItems={navItems} />
      <section className="hero" style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <TypingText />
        <button className="button-with-light">
          <div className="light"></div>
          <span className="button-text">Open to work</span>
        </button>
      </section>

      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="glowing-title">Welcome! I'm Hadis Farrokhi.</h1>
            <p className="description-text">
            Thank you for visiting my portfolio! Here, you can explore the projects that fuel my passion for technology. Currently, I am pursuing a Bachelor of Software Engineering at the University of Waterloo, where I am deepening my expertise in both theory and applied practice.
            My professional experience spans machine learning, full-stack development, and software engineering. Each project I undertake is crafted with ❤ and dedication, reflecting my commitment to creating impactful and innovative solutions. 
            As a creative and analytical thinker, I am constantly exploring new technologies and methodologies to push the boundaries of what's possible. Let's collaborate to turn visionary ideas into reality!
            </p>
          </div>
          <div className="home-image">
            <img src="/profile.png" alt="Profile" />
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section hidden">
        <h2 className="section-title">Experiences</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <img src="/experience1.jpg" alt="Experience 1" />
            <h3>Machine Learning Researcher</h3>
            <p>I collaborated on a DeFi phishing detection project, achieving 78% accuracy with Python tools like Pandas and Numpy. We analyzed over 1,000 Ethereum transactions and developed a parser to enhance security.</p>
          </div>
          <div className="experience-card">
            <img src="/experience2.webp" alt="Experience 2" />
            <h3>Full Stack Developer</h3>
            <p>I developed websites and online shops for over 10 clients using React, Node.js, and MySQL, boosting viewership with keyword optimization and providing ongoing technical support.</p>
          </div>
          <div className="experience-card">
            <img src="/experience3.avif" alt="Experience 3" />
            <h3>Programming Tutor</h3>
            <p>I tutored over 40 high school students in Python, Java, and Math, employing innovative methods to enhance their learning experience and exam preparation.</p>
          </div>
          <div className="experience-card">
            <img src="/experience4.jpg" alt="Experience 4" />
            <h3>Volunteer Coding Instructor</h3>
            <p>I was a volunteer coding instructor in Toronto, teaching Python to over 50 students aged 13-18, tailoring lessons to their skill levels and assisting with their coding projects.</p>
          </div>
          <div className="experience-card">
            <img src="/experience5.jpg" alt="Experience 5" />
            <h3>President of Math and CS club</h3>
            <p>I led classes for CIMC, CTMC, and CCC competitions, training over 45 participants in high school. I also organized events to enhance math and coding skills.</p>
            </div>
          <div className="experience-card">
            <img src="/experience6.jpg" alt="Experience 6" />
            <h3 class="small-heading">President of International Association</h3>
            <p>In high school, I led CIMC, CTMC, and CCC competition classes for over 45 participants and organized events to enhance math and coding skills, addressing participant queries.</p>
            </div>
        </div>
        
      </section>

      <section id="projects" className="projects-section hidden">
        <h2 className="section-title">Projects</h2>
        <div className="projects-scroll-container">
          <div className="project-card">
            <img src="/musical.jpg" alt="Project 1" />
            <h3>Musical Keyboard</h3>
            <a href="https://github.com/Hadis-fa/musical-keyboard.git" target="_blank" className="see-more-btn">Click to See More</a>
          </div>
          <div className="project-card">
            <img src="/categorize.jpg" alt="Project 2" />
            <h3>Resume Categorizer System</h3>
            <a href="https://github.com/Hadis-fa/Resume-Categorizer-System.git" target="_blank" className="see-more-btn">Click to See More</a>
          </div>
          <div className="project-card">
            <img src="/destination.jpeg" alt="Project 3" />
            <h3>Destination Climate</h3>
            <a href="https://github.com/Hadis-fa/destination-climate.git" target="_blank" className="see-more-btn">Click to See More</a>
          </div>
          <div className="project-card">
            <img src="/calender.avif" alt="Project 4" />
            <h3>Inclusive Workplace Calendar</h3>
            <a href="https://github.com/Hadis-fa/Event-Calendar.git" target="_blank" className="see-more-btn">Click to See More</a>
          </div>
          <div className="project-card">
            <img src="/TicTacToe.webp" alt="Project 5" />
            <h3>TicTacToe</h3>
            <a href="https://github.com/Hadis-fa/TicTacToe-Java.git" target="_blank" className="see-more-btn">Click to See More</a>
          </div>
        </div>
      </section>

      <section id="languages" className="skills-section hidden">
      <h2 className="skills-title" style={{
  fontSize: '48px',  // Font size adjusted as per new specification
  marginBottom: '40px',  // Margin bottom for spacing
  color: '#9b59b6',  // Purple color for the title text, specific shade
  textTransform: 'uppercase',  // Ensures text is in uppercase
}}>Languages</h2>
        <div className="skills-container">
          <div className="skills-slider">
            {/* Duplicate the image set for seamless looping */}
            {[...Array(2)].flat().map((_, repeatIndex) => (
              <React.Fragment key={repeatIndex}>
                <img src="/css.png" alt="CSS" />
                <img src="/python.webp" alt="Python" />
                <img src="/java.png" alt="Java" />
                <img src="/c.png" alt="C" />
                <img src="/html.png" alt="HTML/CSS" />
                <img src="/php.png" alt="PHP" />
                <img src="/c++.png" alt="C++" />
                <img src="/javascript.webp" alt="Javascript" />
                {/* Add more images as needed */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div id="contact" className="contact-section">
      <h2 className="section-title">Contact ME</h2>


  <p> I'm currently open to work opportunities. If you want to get in touch, please email me directly at <a href="mailto:ha.farokhi85@gmail.com" style={{ color: "#8e44ad" }}>ha.farokhi85@gmail.com</a>.</p>
  <p>I'm always excited to explore new ideas, collaborations, and opportunities. Feel free to reach out anytime—I'd love to hear from you.
</p>
  <div className="social-links">
    <a href="https://discordapp.com/users/hadis_fa" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faDiscord} />  {/* Discord Icon */}
    </a>
    <a href="https://linkedin.com/in/hadis-f" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />  {/* LinkedIn Icon */}
    </a>
    <a href="mailto:ha.farokhi85@gmail.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope} />  {/* Email Icon for demonstration; typically not used for Instagram */}
    </a>
  </div>
</div>

</div>


  );
}

export default App;

