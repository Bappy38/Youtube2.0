import { configureStore } from "@reduxjs/toolkit";
import configReducer from './configSlice';
import searchReducer from './searchSlice';
import chatReducer from './chatSlice';

const appStore = configureStore({
    reducer: {
        config: configReducer,
        search: searchReducer,
        chat: chatReducer
    }
});

export default appStore;