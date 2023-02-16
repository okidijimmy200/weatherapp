import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import List from '../components/list/list';

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
            "sys": {'country': 'uganda', 'sunrise': 1676100169, 'sunset': 1676135210},
            "weather": [{'main': 'test'}],
            "main": {'temp': 290, 'humidity': 20, 'pressure': 100},
            'wind': {'speed': 13, 'deg': 30},
            "temp": "25"
        },
        isLoading: false,
        isSuccess: true,
        isError: false,
        isMessage: ''
    }
}


const mockStore = configureStore([thunk])
const listStore = mockStore(initialState)

// resultsStore
const resultsStore = mockStore(mockValues)

describe('<List/>', () => {
    it('should contain text wind, sunset', () => {
        const { getByText } = render(
            <Provider store={listStore}>
                <List />
            </Provider>
        )
        expect(getByText('High/Low')).toBeInTheDocument()
        expect(getByText('wind')).toBeInTheDocument()
        expect(getByText('Wind Direction')).toBeInTheDocument()
        expect(getByText('Pressure')).toBeInTheDocument()
        expect(getByText('Visibility')).toBeInTheDocument()
        expect(getByText('Sunset')).toBeInTheDocument()
    })

    it('should contain a list of weather result for country', () => {
        const { getByText } = render(
            <Provider store={resultsStore}>
                <List />
            </Provider>
        )
        expect(getByText('13 Km/hr')).toBeInTheDocument()
        expect(getByText('20 %')).toBeInTheDocument()
        expect(getByText('30 deg')).toBeInTheDocument()
        expect(getByText('100 hPa')).toBeInTheDocument()
        expect(getByText('10:22:49 AM')).toBeInTheDocument()
        expect(getByText('8:06:50 PM')).toBeInTheDocument()
    })
})