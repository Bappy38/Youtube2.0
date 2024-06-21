import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        isSidebarOpen: false
    },
    reducers: {
        changeSidebarOpenStatus: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
});

export const { changeSidebarOpenStatus } = configSlice.actions;

export default configSlice.reducer;