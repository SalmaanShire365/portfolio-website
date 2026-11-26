import { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 56px;
  flex: 1;
  min-width: 0;
`;

const Logo = styled.a`
  font-size: 0.85rem;
  font-weight: 800;
  color: ${p => p.theme.navText};
  margin-right: auto;
  white-space: nowrap;

  span { color: ${p => p.theme.accent}; }
`;

const Links = styled.ul`
  display: flex;
  gap: 0.25rem;

  @media (max-width: 720px) {
    display: ${p => (p.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 57px;
    left: 0;
    right: 0;
    background: ${p => p.theme.navBg};
    border-bottom: 1px solid ${p => p.theme.border};
    z-index: 100;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 0.25rem 0.6rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${p => p.theme.navText};
  opacity: 0.8;
  transition: color 0.15s, opacity 0.15s;

  &::before {
    content: './';
    color: ${p => p.theme.accent};
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
    color: ${p => p.theme.accent};
  }

  @media (max-width: 720px) {
    padding: 0.75rem 1.25rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: 1px solid ${p => p.theme.navText};
  color: ${p => p.theme.navText};
  font-family: inherit;
  font-size: 1rem;
  width: 34px;
  height: 34px;
  cursor: pointer;

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LINKS = [
  { label: 'about',     href: '#about' },
  { label: 'lineready', href: '#lineready' },
  { label: 'projects',  href: '#projects' },
  { label: 'setup',     href: '#setup' },
  { label: 'contact',   href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#about">~/<span>salmaan</span></Logo>
      <Hamburger
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </Hamburger>
      <Links $open={open}>
        {LINKS.map(({ label, href }) => (
          <li key={label}>
            <NavLink href={href} onClick={() => setOpen(false)}>{label}</NavLink>
          </li>
        ))}
      </Links>
    </Nav>
  );
}

export default Navbar;
