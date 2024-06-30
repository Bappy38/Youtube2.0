import { configureStore } from "@reduxjs/toolkit";
import configReducer from './configSlice';
import searchReducer from './searchSlice';

const appStore = configureStore({
    reducer: {
        config: configReducer,
        search: searchReducer
    }
});

export default appStore;