import ThemeProvider, { useTheme } from './components/ThemeProvider';
import { lightTheme, darkTheme } from './theme/theme';
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import About from './pages/About';
import LineReady from './pages/LineReady';
import Projects from './pages/Projects';
import Setup from './pages/Setup';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.text};
    transition: background-color 0.2s, color 0.2s;
  }

  ::selection {
    background: ${p => p.theme.accent};
    color: ${p => p.theme.background};
  }

  :focus-visible {
    outline: 2px solid ${p => p.theme.accent};
    outline-offset: 2px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  /* faint CRT scanlines in dark mode only */
  &::after {
    content: '';
    display: ${p => (p.theme.name === 'crt' ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 200;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.025) 0,
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px,
      transparent 3px
    );
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const ToggleBtn = styled.button`
  background: transparent;
  color: ${p => p.theme.navText};
  border: 1px solid ${p => p.theme.navText};
  font-family: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${p => p.theme.accent};
    border-color: ${p => p.theme.accent};
    color: ${p => p.theme.navBg};
  }
`;

const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 150;
  background: ${p => p.theme.navBg};
  color: ${p => p.theme.navText};
  border-bottom: 1px solid ${p => p.theme.border};
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const App = () => {
  const [darkMode, toggleDarkMode] = useTheme();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Wrapper>
        <NavBar>
          <NavRow>
            <Navbar />
            <ToggleBtn onClick={toggleDarkMode} aria-label={darkMode ? 'Light mode' : 'Dark mode'}>
              {darkMode ? '[ light ]' : '[ dark ]'}
            </ToggleBtn>
          </NavRow>
        </NavBar>
        <Main>
          <About />
          <LineReady />
          <Projects />
          <Setup />
        </Main>
        <Footer />
      </Wrapper>
    </StyledThemeProvider>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
