import {render, screen} from '@testing-library/react';
import Navbar from './Navbar'; 
import { describe, expect, it } from 'vitest';

describe('Navbar', () => {
    it('renders the navbar', () => {
        render(<Navbar/>)
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
    
})