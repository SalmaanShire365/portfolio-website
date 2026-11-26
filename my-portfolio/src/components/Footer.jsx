import styled from 'styled-components';

const FooterEl = styled.footer`
  border-top: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.surface};
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 2rem;

  @media (max-width: 600px) {
    padding: 2.5rem 1rem 1.5rem;
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.4rem, 3.5vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${p => p.theme.text};
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: ${p => p.theme.textMuted};
  max-width: 60ch;
  margin-bottom: 1.5rem;
`;

const Mail = styled.a`
  display: inline-block;
  font-size: clamp(0.95rem, 2.6vw, 1.15rem);
  font-weight: 700;
  color: ${p => p.theme.accent};
  border-bottom: 2px solid currentColor;
  overflow-wrap: anywhere;

  &:hover { color: ${p => p.theme.text}; }
`;

const Small = styled.p`
  margin-top: 3rem;
  font-size: 0.72rem;
  color: ${p => p.theme.textMuted};
`;

function Footer() {
  return (
    <FooterEl id="contact">
      <Inner>
        <Heading>Let's talk</Heading>
        <Text>
          I'm looking for full-stack and AI engineering roles, and I'm always happy to talk
          about local-first AI, LineReady or Linux setups.
        </Text>
        <Mail href="mailto:salmaanshire@gmail.com">salmaanshire@gmail.com</Mail>
        <Small>© {new Date().getFullYear()} Salmaan Shire · built with React + Vite</Small>
      </Inner>
    </FooterEl>
  );
}

export default Footer;
