import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState={
    todo:[],
    friend:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        setTodos:(state,action)=>{
            state.todo = action.payload
            console.log(state.todo)
        }
    }
})

export const {setTodos} = todoSlice.actions

export default todoSlice.reducer