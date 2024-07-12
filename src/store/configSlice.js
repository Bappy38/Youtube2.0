import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        isSidebarOpen: false,
        isLoading: false,
        selectedCategoryId: 0
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        showLoader: (state) => {
            state.isLoading = true;
        },
        hideLoader: (state) => {
            state.isLoading = false;
        },
        setSelectedCategoryId: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
        resetSelectedCategoryId: (state) => {
            state.selectedCategoryId = 0
        }
    }
});

export const { toggleSidebar, closeSidebar, showLoader, hideLoader, setSelectedCategoryId, resetSelectedCategoryId } = configSlice.actions;

export default configSlice.reducer;