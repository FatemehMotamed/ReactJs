

// import { useReducer } from 'react'
// const initialState = {count:0 , number:1}
// const reducer = (state, action) => {
//   switch(action.type){
//     case "add":
//       return {...state, count : state.count+action.payload}
//     case "mines":
//       return {...state, count: state.count-action.payload}
//     case "reset":
//       return {...state, count: 0}
//     case "up":
//       return {...state, number: state.number+1}
//     default:
//       throw new Error("actin not defined")

import HttpReq from "./HttpReq"

    
//   }
// }
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // const [state2, dispatch2] = useReducer(reducer, initialState)
  // const addHandler = ()=>{
  //   dispatch({type: "add", payload:5})
  // }
  // const decreseHandler = ()=>{
  //   dispatch({type: "mines", payload:2})
  // }
  //  const resetHandler = ()=>{
  //   dispatch({type: "reset"})
  // }
  return (
    <>

    {/* <p>{state.count}</p>
    <button onClick={addHandler}>+</button>
    <button onClick={decreseHandler}>-</button>
    <button onClick={resetHandler}>R</button>
    <br />
    {state.number}
    <button onClick={()=>dispatch({type: "up"})}>up</button>     

    <p>****************</p>
    <p>{state2.count}</p>
    <button onClick={()=>dispatch2({type:"add", payload:20})}>+</button>
    <button onClick={()=>dispatch2({type:"mines", payload:20})}>-</button>
    <button onClick={()=>dispatch2({type:"reset"})}>R</button>
    <br />
    {state2.number}
    <button onClick={()=>dispatch2({type: "up"})}>up</button>      */}

      <HttpReq />
    </>


  )
}

export default App
