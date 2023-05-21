import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const API_KEY_WEATHER = '30bce6e829a6ca024495b8ddc86c33b3';
export const WEATHER_URL_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${'accra'}&appid=${API_KEY_WEATHER}`;


export const fetchWeatherData = createAsyncThunk(
    "weather/fetchWeatherData",
    async () => {
        const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=5.76&lon=-0.22'; //5.760629644077976, -0.21988687588964279
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '57afba0444msh588cf8f80f1912cp1c920ejsn41e40a036afe',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    }
);



export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: {},
        isLoadingWeatherData: false,
        hasErrorFetchingWeatherData: false
    },
    reducers: {},
    extraReducers: {
        [fetchWeatherData.pending]: (state) => {
            state.isLoadingWeatherData = true;

        },
        [fetchWeatherData.fulfilled]: (state, action) => {
            state.isLoadingWeatherData = false;

            state.weather = action.payload;

        },
        [fetchWeatherData.rejected]: (state) => {
            state.isLoadingWeatherData = false;
            state.hasErrorFetchingWeatherData = true;
        }
    }
});

//selectors
export const selectWeatherData = (state) => state.weather;


export default weatherSlice.reducer;