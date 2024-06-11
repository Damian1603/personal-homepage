import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/PersonalHomepage/Header/ThemeButton/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});