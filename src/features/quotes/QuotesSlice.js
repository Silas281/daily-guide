import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "A5fTwZ4nCpWkN6u8GpZwGATsdJi65n1bErC1c78i";
const url = "https://quotes.rest/qod?category=inspire";
const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        "X-Theysaidso-Api-Secret": API_KEY,
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*"
    },
};

//Fetch quote from api with redux asyncThunk
export const fetchQuote = createAsyncThunk(
    "quotes/fetchQuote",
    async (arg, thunkAPI) => {


        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
        return json;
    }
)


//createQuote Slice
export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        quote: {},
        isLoadingFetchQuote: false,
        hasErrorFetchingQuote: false
    },
    reducers: {},
    extraReducers: {
        [fetchQuote.pending]: (state) => {
            state.isLoadingFetchQuote = true;

        }, [fetchQuote.fulfilled]: (state, action) => {
            state.isLoadingFetchQuote = false;
            const quoteData = action.payload.contents;
            state.quote.quote = quoteData;

        },
        [fetchQuote.rejected]: (state) => {
            state.hasErrorFetchingQuote = true;

        }
    }
})

//selectors
export const selectQuote = (state) => state.quote.qoute;

export default quoteSlice.reducer;