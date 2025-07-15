import { useState } from "react";


function Counter() {
    
    const [counter, setcounter] = useState(0)
    const [showStatus, setShowStatus] = useState(null)

    const showHandler = () =>{
      setShowStatus(true)
    }
    const hideHandler = () =>{
      setShowStatus(false)
    }
    const incBtn = ()=>{
        // setcounter(counter+1)

        // async

        setcounter((counter) => counter+1)


    }
    const stop=()=>{
      setcounter(0)
    }
  return (
    <>
    <button onClick={showHandler}>Show</button>
    <button onClick={hideHandler}>Hide</button>
    {showStatus ? 
    (
      <>
        <div>Counter:{counter}</div>
        <button onClick={incBtn}>inc</button>
        <button onClick={stop}>stop</button>
      </>
    )
    : null}

    </>
  )
}

export default Counter