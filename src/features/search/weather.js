import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherapi } from './apis'

// get results from localstorage
const weatherData = JSON.parse(localStorage.getItem('weather'))

const initialState = {
    results: weatherData ?? null, //null coalising
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: ''
}

// search geolocations
export const weather = createAsyncThunk('weather', async(cords, thunkAPI) => {
    const lat = cords.lat
    const lng = cords.lng
    try {
        return await weatherapi(lat, lng)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.isMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(weather.pending, (state) => {
            state.isLoading = true
        })
        .addCase(weather.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.results = action.payload
        })
        .addCase(weather.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isMessage = action.payload
            state.results = null
        })
    }
})


export const {reset} = weatherSlice.actions
export default weatherSlice.reducer