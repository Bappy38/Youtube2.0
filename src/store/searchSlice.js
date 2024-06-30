import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
    },
    reducers: {
        cacheSearchSuggestion: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
});

export const { cacheSearchSuggestion } = searchSlice.actions;

export default searchSlice.reducer;