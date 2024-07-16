import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducer/todoSlice'
const rootReducer = combineReducers({
    todo:todoReducer

})
const store = configureStore({
    reducer: rootReducer
})

export default store