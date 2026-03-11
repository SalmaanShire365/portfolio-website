import { render, screen } from '@testing-library/react'
import Projects from '../pages/Projects.jsx'

// Mock MUI Grid to avoid style/layout issues in tests
vi.mock('@mui/material', () => ({
  Grid: ({ children }) => <div>{children}</div>,
}))

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('renders all three project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Inventory Defect Monitoring System')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Claims Processing API')).toBeInTheDocument()
    expect(screen.getByText('KindHearts Therapy Management Platform')).toBeInTheDocument()
  })

  it('renders View Project links for each card', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /view project/i })
    expect(links).toHaveLength(3)
  })

  it('each link opens in a new tab', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /view project/i })
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})