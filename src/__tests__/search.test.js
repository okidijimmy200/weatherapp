jest.mock('../components/api/api') //auto mock everything inside geocode api
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import {Search} from '../components/search/search';
import {geocode, weather} from '../components/api/api' 

describe('<Search>', () => {
    // make changes to this
    it('has a container div', () => {
        const mockValues = "city"
        /**setValues is a function so we shd use jest.fn() */
        const mockSetValues = 'london'  //
        const { asFragment } = render(<Search setValues={mockSetValues} values={mockValues}/>)
        // not working as expected, test desc not working
        expect(asFragment(<Search setValues={mockSetValues} values={mockValues} />)).toMatchSnapshot();
        
    })
    it('should contain the placeholder text', () => {
        const placeholderCity = "city"
        const placeholderCountry = 'country'
        /*we use values={{}} to */
        const { getByPlaceholderText } = render(<Search values={{}}/>)
        expect(getByPlaceholderText(placeholderCity)).toBeInTheDocument();
        expect(getByPlaceholderText(placeholderCountry)).toBeInTheDocument();

    })
    // test names should be descriptive
    it('should contain a submit button', () => {
        const { getByRole } = render(<Search/>)
        // get by role 
        expect(getByRole('button', {name: 'Submit'})).toBeInTheDocument();
    })

    it('should contain the form', () => {
        const { getByTestId } = render(<Search />)
        expect(getByTestId("FORM_ID")).toBeInTheDocument();
    })
    it('should check if submit button is clicked', async () => {
        // to mock for tests only
        // const geocodespy = jest.spyOn(api, 'geocode')
        // expect spy to return things
        geocode.mockResolvedValue([
            {
                latitude: '23.345', 
                longitude: '19.453'
            }
        ])

        weather.mockResolvedValue(
            {
                'wind': '13km/hr',
                "temp": "25"
            }
        )
        // mock return values
        const setValuesMock = jest.fn()
        const {getByRole} =  render(<Search setValues={setValuesMock}/>)
        const submitButton = getByRole('button')
        // const user = userEvent.setup()

        // click the btn
        // create return values
        await userEvent.click(submitButton) // hack bse onclick for geocode and weather(used 2 promises which creates an issue) not setup well
        await userEvent.click(submitButton)
        // we checed what came out of mocks
        expect(setValuesMock).toHaveBeenCalled()
        expect(setValuesMock).toHaveBeenCalledWith({
            "error": "",
            "searched": true,
            "results": [{
                'wind': '13km/hr',
                "temp": "25"
            }]
        })
      })
})