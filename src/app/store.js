import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../features/goals/goalsSilce.js';
import weatherReducer from '../features/weather/weatherSlice.js';
import imageReducer from '../features/imageSliders/ImagesSlice.js';
import QuoteReducer from '../features/quotes/QuotesSlice.js';


export const store = configureStore({
    reducer: {
        goals: goalsReducer,
        weather: weatherReducer,
        image: imageReducer,
        quote: QuoteReducer
    }
})

