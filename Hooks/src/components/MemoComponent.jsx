import  { useCallback, useMemo, useState } from 'react'
import ChildComponent from './ChildComponent'

function MemoComponent() {
  const [counter, setCounter] = useState(0)
  const [number, setNumber] = useState(0)

  const slow = useMemo(()=>{
    for (let index = 0; index < 1000; index++) {
      console.log("hi")
      
      
    }
    return counter
    
  },[counter])


  const clickHandler = useCallback(()=>{
    setNumber((number)=>number+1)

  },[number])

  return (
    <>

        {/* <div>Counter:{counter}</div> */}
        <div>Counter:{slow}</div>
        <button type='submit' onClick={()=>setCounter((counter)=>counter+1)}  >+</button>

        <div>Number: {number}</div>
        <button type='submit' onClick={clickHandler}  >+</button>

        <ChildComponent number={number} clickHandler={clickHandler} />
    
    </>
  )
}

export default MemoComponent