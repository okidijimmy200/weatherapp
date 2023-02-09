jest.mock('./container/page')
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App';

const initialState = {}

const mockStore = configureStore()

const weatherStore = mockStore(initialState)

test('check weather app', () => {
  render(
    <Provider store={weatherStore}>
        <App />
    </Provider>

  );
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
