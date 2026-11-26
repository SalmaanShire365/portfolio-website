import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme } from '../theme/theme'
import Navbar from './Navbar'
import { describe, expect, it } from 'vitest'

const wrapper = ({ children }) => (
  <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
)

describe('Navbar', () => {
  it('renders when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />, { wrapper })

    const link = screen.getByRole('link', { name: /projects/i })
    await user.click(link)

    expect(link).toBeInTheDocument()
  })
})
