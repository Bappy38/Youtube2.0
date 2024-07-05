import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "../constants/AppConstants";


const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        appendMessage: (state, action) => {

            state.messages.splice(LIVE_CHAT_OFFSET, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { appendMessage } = chatSlice.actions;

export default chatSlice.reducer;