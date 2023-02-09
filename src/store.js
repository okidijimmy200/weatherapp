import { configureStore } from '@reduxjs/toolkit';
import geocodeReducer from './features/search/geocode'
import weatherReducer from './features/search/weather'



export default configureStore({
  reducer: {
    geocode: geocodeReducer,
    weather: weatherReducer
  },
});