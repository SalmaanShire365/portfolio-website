import About from './pages/About';
import ThemeProvider, {useTheme} from './components/ThemeProvider';
import { lightTheme, darkTheme } from './theme/theme';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 1rem;
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
`;

const App = () => {
  const [darkMode, toggleDarkMode] = useTheme();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <Wrapper>
        <Navbar />
        <Button onClick={toggleDarkMode}>
          <img src="/assets/darkmode.svg" alt="" />
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
        <About />
        <Projects />
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