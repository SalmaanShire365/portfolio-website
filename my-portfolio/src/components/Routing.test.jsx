import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppWrapper from '../App.jsx'

describe('App', () => {
  it('renders the Navbar', () => {
    render(<AppWrapper />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the dark mode toggle button', () => {
    render(<AppWrapper />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
  })

  it('toggles to light mode when button is clicked', async () => {
    const user = userEvent.setup()
    render(<AppWrapper />)

    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(button)

    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<AppWrapper />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})