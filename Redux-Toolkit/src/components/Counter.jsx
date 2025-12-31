import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector } from '../features/counter/CounterSlice'
import { increament, decreament,increamentByamount } from '../features/counter/CounterSlice'
function Counter() {
//  const store = useSelector((store)=>store)
// const counter = useSelector((store)=>store.counter.counterValue)
const counter = useSelector(counterSelector)
const dispatch = useDispatch()
 console.log(counter)
  return (
   
    <>

    <h3>counter is : {counter}</h3>
    <button onClick={()=> dispatch(increament())}>+</button>
    <button onClick={()=> dispatch(decreament())}>-</button>
    <button onClick={()=> dispatch(increamentByamount(2))}>++</button>

    </>
  )
}

export default Counter