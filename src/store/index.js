import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: true })
    },
    devTools: true
})

export default store;