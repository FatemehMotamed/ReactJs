import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((count)=>count+1)
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }

    }, [count])
  return (
    <div>Counter: {count} </div>
  )
}

export default Counter