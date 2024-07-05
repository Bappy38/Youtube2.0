import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        appendMessage: (state, action) => {

            
            state.messages.unshift(action.payload);
        }
    }
});

export const { appendMessage } = chatSlice.actions;

export default chatSlice.reducer;