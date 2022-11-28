import { render, screen } from '@testing-library/react';

import Search from '../components/search/search';

describe('<Search>', () => {
    it('has a container div', () => {
        render(<Search />)
        const el = screen.getByTestId('py-[1rem] px-[3rem]')
        expect(el.className).toBe('py-[1rem] px-[3rem]')
    })

    it('has a a form', () => {
        render(<Search />)
        const el = screen.getByPlaceholderText('city')
        // to check if it exsists, expect to be in document
        expect(el.className).toBe('flex justify-between')
    })
    it('input type', () => {
        render(<Search />)
        // co
    })
})