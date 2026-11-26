import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { Section, Prompt, Heading, Lead } from '../components/Section';
import { PROJECTS } from '../data/projects';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 1.25rem;
`;


function Projects() {
  return (
    <Section id="projects" className="projects-section">
      <Prompt path="~/projects">ls --featured</Prompt>
      <Heading>My Projects</Heading>
      <Lead>
        Local-first AI tools I build and use myself. The models run on my own machine and a
        person stays in control.
      </Lead>
      <Grid>
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
