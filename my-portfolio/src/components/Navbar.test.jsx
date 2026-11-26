import { render, screen } from '@testing-library/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme } from '../theme/theme'
import Navbar from './Navbar'
import { describe, expect, it } from 'vitest'

const wrapper = ({ children }) => (
  <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
)

describe('Navbar', () => {
  it('renders the navbar', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
