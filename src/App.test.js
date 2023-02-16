jest.mock('./container/page')
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App';

const initialState = {}

const mockStore = configureStore()

const weatherStore = mockStore(initialState)

// we need to test logic not html content, so not necessary

test('check weather app', () => {
  render(
        <App />

  );
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
