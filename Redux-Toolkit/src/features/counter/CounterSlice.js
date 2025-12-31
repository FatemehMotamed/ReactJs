import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterValue : 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state,action)=>{
                state.counterValue++
        },
        decreament: (state,action)=>{
            state.counterValue--
            
        },
         increamentByamount: (state,action)=>{
            state.counterValue+=action.payload
            
        }
    }
})

export default counterSlice.reducer
export const {increament,decreament,increamentByamount} = counterSlice.actions
export const counterSelector = (store)=>store.counter.counterValue