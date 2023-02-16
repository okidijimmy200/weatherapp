import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Display from '../components/display/display';

const initialState = {
    weather: {
        results: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        isMessage: ''
    }
}

const mockValues = {
    weather: {
        results: {
            "name": "kampala",
            "sys": {'country': 'uganda'},
            "weather": [{'main': 'test'}],
            "main": {'temp': 290},
            "description": 'test',
            'wind': '13km/hr',
            "temp": "25"
        },
        isLoading: false,
        isSuccess: true,
        isError: false,
        isMessage: ''
    }
}

const mockStore = configureStore([thunk])
const displayStore = mockStore(initialState)

// resultsStore
const resultsStore = mockStore(mockValues)

describe('<Display>', () => {
    it('should contain the title, time and clouds on initial load', () => {
        const { getByText } = render(
        <Provider store={displayStore}>
            <Display/></Provider>)
        expect(getByText('City In. Weather')).toBeInTheDocument()
        expect(getByText('Time')).toBeInTheDocument()
        expect(getByText('Overcast clouds')).toBeInTheDocument()
    })

    it('should contain searched weather results of country', () => {
        // to use fake timers(useful for comparison btn mock and present values)
        // (tests can be used as documentation for our work)
        jest.useFakeTimers().setSystemTime(new Date('2020-10-10'))
        // render provider(display) to test 
        const { getByText } = render(
            <Provider store={resultsStore}>
            <Display/></Provider>
        )
        expect(getByText('kampala, uganda. Weather')).toBeInTheDocument()
        // 3 am bse time defaults to 12AM + 3
        expect(getByText('As of 3:00:00 AM')).toBeInTheDocument()
        expect(getByText('17')).toBeInTheDocument()
    })
})