jest.mock('../features/search/apis') //auto mock everything inside eolocation api
import { render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { Search } from '../components/search/search';
import { geolocation, weatherapi } from '../features/search/apis'

describe('<Search>', () => { 
    it('should check if the submit button is clicked', async () => {
        // const geolocation, weatherapispy = jest.spyOn(geocode, 'geocode') // this is the same as the jest mock api, incase to mock specific details
        geolocation.mockResolvedValue([
        {
            latitude: '23.345', 
            longitude: '19.453'
        }])

        weatherapi.mockResolvedValue(
                {
                    'wind': '13km/hr',
                    "temp": "25"
                }
            )

        // to avoid warnings, use preventDefault in the submit button situation
        const clickSubmit = jest.fn(e => e.preventDefault())
        const prevSearch = jest.fn()
        const setValues = jest.fn()
        const {getByRole, getByPlaceholderText} = render(<Search 
            clickSubmit={clickSubmit}
            setValues={setValues}
            values={{}}
            loading={false}
            prevSearch={prevSearch}
            
        />)
    
        const submitButton = getByRole('button')
    
        await userEvent.click(submitButton)
    
    
        expect(clickSubmit).toHaveBeenCalled()


        //test for setValues
        const input1 = getByPlaceholderText('city')
        const input2 = getByPlaceholderText('country')

        await userEvent.type(input1, 'a')
        await userEvent.type(input2, 'b')

        expect(setValues).toHaveBeenCalledWith({
            city: 'a'
        })
        expect(setValues).toHaveBeenCalledWith({
            country: 'b'
        })
        
    })

 })

