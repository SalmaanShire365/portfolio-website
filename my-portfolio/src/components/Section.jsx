import styled from 'styled-components';

export const Section = styled.section`
  padding: 4.5rem 0;
  border-bottom: 1px dashed ${p => p.theme.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

const PromptLine = styled.p`
  font-size: 0.8rem;
  color: ${p => p.theme.textMuted};
  margin-bottom: 0.75rem;

  .user { color: ${p => p.theme.accentAlt}; }
  .path { color: ${p => p.theme.accent}; }
`;

/** Shell-prompt style eyebrow: `salmaan@shire:~/path $ command` */
export function Prompt({ path = '~', children }) {
  return (
    <PromptLine aria-hidden="true">
      <span className="user">salmaan@shire</span>:<span className="path">{path}</span> $ {children}
    </PromptLine>
  );
}

export const Heading = styled.h2`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: ${p => p.theme.text};
  margin-bottom: 1.25rem;
`;

export const Lead = styled.p`
  font-size: 0.95rem;
  color: ${p => p.theme.textMuted};
  max-width: 64ch;
  margin-bottom: 2rem;
`;

export const Tag = styled.li`
  font-size: 0.72rem;
  font-weight: 500;
  color: ${p => p.theme.accentAlt};
  border: 1px solid ${p => p.theme.border};
  padding: 0.1rem 0.5rem;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;
