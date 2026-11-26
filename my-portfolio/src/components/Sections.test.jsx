import { render, screen } from '@testing-library/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme } from '../theme/theme'
import LineReady from '../pages/LineReady.jsx'
import Setup from '../pages/Setup.jsx'

const wrapper = ({ children }) => (
  <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
)

describe('LineReady', () => {
  it('renders the pitch and all four workflow steps', () => {
    render(<LineReady />, { wrapper })
    expect(screen.getByRole('heading', { name: 'LineReady' })).toBeInTheDocument()
    const steps = screen.getByRole('list', { name: /how lineready works/i })
    ;['Report', 'Retrieve', 'Draft', 'Approve'].forEach(step => {
      expect(steps).toHaveTextContent(step)
    })
  })

  it('labels the sample work order as illustrative', () => {
    render(<LineReady />, { wrapper })
    expect(screen.getByText(/illustrative example/i)).toBeInTheDocument()
  })
})

describe('Setup', () => {
  it('lists the daily-driver setup', () => {
    render(<Setup />, { wrapper })
    expect(screen.getByText('Arch Linux')).toBeInTheDocument()
    expect(screen.getByText('Neovim')).toBeInTheDocument()
  })
})
