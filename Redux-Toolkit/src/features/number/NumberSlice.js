import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NumberValue : 0
}

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increament: (state,action)=>{
                state.NumberValue++
        },
        decreament: (state,action)=>{
            state.NumberValue--
            
        },

         
    },
    extraReducers: (builder) => {
        builder.addCase("counter/increament", (state) => {
            state.NumberValue++
        })
        

    }
})

export default numberSlice.reducer
export const {increament,decreament} = numberSlice.actions
export const numberSelector = (store)=>store.number.NumberValue