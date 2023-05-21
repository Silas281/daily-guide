import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchImage = createAsyncThunk(
    "image/fetchImage",
    async (arg, thunkAPI) => {
        const url = 'https://api.unsplash.com/photos/?client_id=EuT-KaW5adANrqO6e5rJ50kbziX0eXJ2zxHDH0r__0E';
        const response = await fetch(url, { method: "GET" });
        const json = await response.json();
        // console.log(json)
        return json;
    }
);


export const imageSlice = createSlice({
    name: "image",
    initialState: {
        image: {},
        isLoadingImage: false,
        hasErrorLoadingImage: false
    },
    reducers: {},
    extraReducers: {
        [fetchImage.pending]: (state) => {
            state.isLoadingImage = true;
        },
        [fetchImage.fulfilled]: (state, action) => {
            state.isLoadingImage = false;
            // console.log(action.payload[0].urls)
            const imageUrls = action.payload[0].urls;
            state.image.image = imageUrls;
        },
        [fetchImage.rejected]: (state) => {
            state.isLoadingImage = false;
            state.hasErrorLoadingImage = true;
        }
    }
});

//selectors
export const selectImage = (state) => state.image.image;

export default imageSlice.reducer;