import aboutStyles from '../modules/about.module.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import gmailIcon from '../assets/gmail.svg';
function About() {
  return ( 
    <div className={aboutStyles.about}>
      <h1>Salmaan Shire</h1>
      <p>
        Hello! I'm a passionate software developer with a love for creating innovative solutions. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies. In my free time, I enjoy contributing to open-source projects and exploring the latest trends in tech.
      </p>
      <div className={aboutStyles.socials}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <img src={gmailIcon} alt="Gmail" />
        </a>
      </div>
    </div>
  );
}
export default About;