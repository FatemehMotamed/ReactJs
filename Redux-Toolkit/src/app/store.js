import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/CounterSlice"
import numberReducer from "../features/number/NumberSlice"
import usersReducer from "../features/users/UsersSlice"
import logger from "redux-logger";
const store = configureStore({
    reducer:{
        counter: counterReducer,
        number: numberReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store