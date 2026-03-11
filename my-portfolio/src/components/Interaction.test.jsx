import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { describe, expect, it } from 'vitest';

describe('Navbar', () => {
    it('renders when a link is clicked', async () => {
        const user = userEvent.setup()
        render(<Navbar/>)

        const link = screen.getByRole('link',{name: /projects/i })
        await user.click(link)

        expect(link).toBeInTheDocument()
    })
})