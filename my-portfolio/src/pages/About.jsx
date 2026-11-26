import styled, { keyframes } from 'styled-components';
import { Section, Prompt } from '../components/Section';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import gmailIcon from '../assets/gmail.svg';

const blink = keyframes`
  50% { opacity: 0; }
`;

const Hero = styled(Section)`
  padding-top: 5rem;
`;

const Name = styled.h1`
  font-size: clamp(2.25rem, 7vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: ${p => p.theme.text};
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 0.85em;
    margin-left: 0.15em;
    vertical-align: -0.05em;
    background: ${p => p.theme.accent};
    box-shadow: ${p => p.theme.glow};
    animation: ${blink} 1.1s steps(1) infinite;
  }
`;

const Tagline = styled.p`
  font-size: clamp(1.05rem, 2.4vw, 1.3rem);
  font-weight: 700;
  color: ${p => p.theme.accent};
  margin-bottom: 1.5rem;
  max-width: 40ch;
`;

const Bio = styled.p`
  font-size: 0.95rem;
  color: ${p => p.theme.textMuted};
  max-width: 64ch;
  margin-bottom: 1rem;

  strong { color: ${p => p.theme.text}; font-weight: 700; }
`;

const Status = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  color: ${p => p.theme.text};
  border: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.surface};
  padding: 0.35rem 0.75rem;
  margin: 1rem 0 2rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.theme.accentAlt};
    box-shadow: 0 0 8px ${p => p.theme.accentAlt};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${p => p.theme.text};
  border: 1px solid ${p => p.theme.text};
  padding: 0.5rem 0.9rem;
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  img {
    width: 16px;
    height: 16px;
    filter: ${p => p.theme.iconFilter};
  }

  &:hover,
  &:focus-visible {
    background: ${p => p.theme.accent};
    border-color: ${p => p.theme.accent};
    color: ${p => p.theme.background};

    img { filter: ${p => (p.theme.name === 'crt' ? 'none' : 'invert(1)')}; }
  }
`;

function About() {
  return (
    <Hero id="about">
      <Prompt>whoami</Prompt>
      <Name>Salmaan Shire</Name>
      <Tagline>Full-stack engineer building AI that runs on your own hardware.</Tagline>
      <Bio>
        I work across <strong>Java / Spring Boot</strong>, <strong>Python</strong>,{' '}
        <strong>React</strong> and <strong>Rust</strong>. Right now I'm building{' '}
        <strong>LineReady</strong>, a private AI assistant for plant maintenance teams, and{' '}
        <strong>AMADEUS</strong>, a fully local AI task harness.
      </Bio>
      <Bio>
        Both follow the same rules: the data stays on the machine, answers show where they
        came from, and a person approves before anything changes.
      </Bio>
      <Status>open to full-stack &amp; AI engineering roles</Status>
      <Socials>
        <SocialLink href="https://github.com/SalmaanShire365" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="" /> GitHub
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/salmaan-shire" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="" /> LinkedIn
        </SocialLink>
        <SocialLink href="mailto:salmaanshire@gmail.com">
          <img src={gmailIcon} alt="" /> Email
        </SocialLink>
      </Socials>
    </Hero>
  );
}

export default About;
