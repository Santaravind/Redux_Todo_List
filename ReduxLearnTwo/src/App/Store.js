import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Features/todoSlice"


export const Store=configureStore({
    reducer:todoReducer,
})

