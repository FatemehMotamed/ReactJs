import React, { useRef, useState } from 'react'

function RefComponent() {
  const counterRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const myinput = useRef(null)
  const clickHandler = ()=>{
    setCounter ((counter)=>counter+1)
    console.log(counterRef)
  }
  const clickRHandler = ()=>{
    counterRef.current++
    console.log(counterRef)
  }

  const inputHandler= ()=>{
    console.log(myinput.current.value)
    myinput.current.focus()
  }
  return (
    <>
    
    <div>Render</div>
    {counter}
    <input type='button' onClick={clickHandler} value="inc" />< br />
    <input type='button' onClick={clickRHandler} value="incRef" />
    {console.log(counterRef)}

    {/* access to dom objects with ref */}
    <input type='text'  ref={myinput} />
    <input type='button' onClick={inputHandler} value="send" />< br />

    
    </>

  )
}

export default RefComponent