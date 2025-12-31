import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberSelector } from '../features/number/NumberSlice'
import { increament, decreament } from '../features/number/NumberSlice'
function Number() {
//  const store = useSelector((store)=>store)
// const counter = useSelector((store)=>store.counter.counterValue)
const number = useSelector(numberSelector)
const dispatch = useDispatch()

  return (
   
    <>

    <h3>number is : {number}</h3>
    <button onClick={()=> dispatch(increament())}>+</button>
    <button onClick={()=> dispatch(decreament())}>-</button>

    </>
  )
}

export default Number