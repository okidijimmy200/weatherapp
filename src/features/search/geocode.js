import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { geolocation } from './apis'


const initialState = {
    geocodeValue: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: ''
}

// search geolocations
export const geocode = createAsyncThunk('geocode', async(params, thunkAPI) => {
    try {
        return await geolocation(params)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

export const geocodeSlice = createSlice({
    name: 'geocode',
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
        .addCase(geocode.pending, (state) => {
            state.isLoading = true
        })
        .addCase(geocode.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.geocodeValue = action.payload
        })
        .addCase(geocode.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isMessage = action.payload
            state.geocodeValue = null
        })
    }
})


export const {reset} = geocodeSlice.actions
export default geocodeSlice.reducer