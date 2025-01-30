import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../features/PersonalHomepage/Header/ThemeButton/themeSlice";
import personalHomepageReducer from "../features/personalHomepageSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        personalHomepage: personalHomepageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga)

export default store;