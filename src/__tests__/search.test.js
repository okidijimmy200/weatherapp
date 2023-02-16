import { render} from '@testing-library/react';
import {Search} from '../components/search/search';

describe('<Search>', () => {
    it('should contain a main div', () => {
        const clickSubmit = jest.fn()
        const { getByTestId } = render(<Search 
            clickSubmit={clickSubmit}
            values={{}} 
            storage={[]} 
            loading={false}
            />)
        expect(getByTestId('search_form')).toBeInTheDocument()  
    })
        it('should contain the placeholder text', () => {
        const placeholderCity = "city"
        const placeholderCountry = 'country'
        /*we use values={{}} to */
        const { getByPlaceholderText } = render(<Search
            clickSubmit={jest.fn()} 
            storage={[]} 
            loading={false}
            values={{}}/>)
        expect(getByPlaceholderText(placeholderCity)).toBeInTheDocument();
        expect(getByPlaceholderText(placeholderCountry)).toBeInTheDocument();
    })

        // // test names should be descriptive
    it('should contain a search button', () => {
        const { getByRole } = render(<Search
            clickSubmit={jest.fn()} 
            storage={[]} 
            loading={false}
            values={{}}
        />)
        // get by role 
        expect(getByRole('button', {name: 'Search'})).toBeInTheDocument();
    })

    it('should contain the form', () => {
        const { getByTestId } = render(<Search
            clickSubmit={jest.fn()} 
            storage={[]} 
            loading={false}
            values={{}}
            />)
        expect(getByTestId("FORM_ID")).toBeInTheDocument();
    })
})