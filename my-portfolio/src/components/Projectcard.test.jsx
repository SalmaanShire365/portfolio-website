import {render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard.jsx'
import { expect } from 'vitest'

const mockProps = {
    title: "Test Project",
    description: 'A test description',
    projectDate: 'January 1, 2023',
    projectUrl: 'https://github.com/SalmaanShire365',
}

describe('ProjectCard', () => {
    it('renders the project title', () => {
        render(<ProjectCard {...mockProps} />)
        expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('renders the project description', () => {
        render(<ProjectCard {...mockProps} />)
        expect(screen.getByText('A test description')).toBeInTheDocument()
    })

    it('renders the project date', () => {
        render(<ProjectCard {...mockProps} />)
        expect(screen.getByText('January 1, 2023')).toBeInTheDocument()
    })
    it('renders the project link', () => {
        render(<ProjectCard {...mockProps} />)
        const link = screen.getByRole('link', { name: /view project/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://github.com/SalmaanShire365')
    })
})