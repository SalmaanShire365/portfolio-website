import styled from 'styled-components';
import { Tags, Tag } from './Section';

const Card = styled.article`
  background: ${p => p.theme.surface};
  border: 1px solid ${p => p.theme.border};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${p => p.theme.accent};
    box-shadow: 4px 4px 0 ${p => p.theme.accent};
  }
`;

const Meta = styled.span`
  font-size: 0.7rem;
  color: ${p => p.theme.textMuted};
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${p => p.theme.text};
  line-height: 1.2;
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  color: ${p => p.theme.textMuted};
`;

const Highlights = styled.ul`
  display: grid;
  gap: 0.5rem;

  li {
    position: relative;
    padding-left: 1.25rem;
    font-size: 0.82rem;
    color: ${p => p.theme.text};
  }

  li::before {
    content: '+';
    position: absolute;
    left: 0;
    color: ${p => p.theme.accentAlt};
    font-weight: 700;
  }
`;

const CardLink = styled.a`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${p => p.theme.accent};
  align-self: flex-start;
  border-bottom: 1px solid currentColor;

  &:hover {
    color: ${p => p.theme.text};
  }
`;

function ProjectCard({ title, description, projectDate, projectUrl, highlights = [], tags = [] }) {
  return (
    <Card className="project-card">
      <Meta>{projectDate}</Meta>
      <CardTitle className="project-title">{title}</CardTitle>
      <CardDesc className="project-description">{description}</CardDesc>
      {highlights.length > 0 && (
        <Highlights>
          {highlights.map(h => <li key={h}>{h}</li>)}
        </Highlights>
      )}
      {tags.length > 0 && (
        <Tags aria-label="Technologies">
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </Tags>
      )}
      <CardLink
        href={projectUrl}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </CardLink>
    </Card>
  );
}

export default ProjectCard;
