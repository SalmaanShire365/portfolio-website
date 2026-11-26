import { render, screen } from '@testing-library/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme } from '../theme/theme'
import Projects from '../pages/Projects.jsx'
import { PROJECTS } from '../data/projects'

const wrapper = ({ children }) => (
  <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
)

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />, { wrapper })
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('renders a card for every featured project', () => {
    render(<Projects />, { wrapper })
    expect(screen.getByText('AMADEUS')).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: /view project/i })
    expect(links).toHaveLength(PROJECTS.length)
  })

  it('each link opens in a new tab', () => {
    render(<Projects />, { wrapper })
    const links = screen.getAllByRole('link', { name: /view project/i })
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
