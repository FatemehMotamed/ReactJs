import React, { useEffect, useState, useTransition } from 'react'
import { useTitle } from '../hooks/useTitle'

function TransitionComponent() {
    // useEffect(()=>{
    //     document.title = "Transition"
    // },[])
    useTitle("Transition")
    console.log("Rendered")
    const arrayCreator = (number = 10) => {
        const temp = []
        for (let index = number; index >= 0; index--) {
            temp.push(index)
            
        }
        return temp
        
    }
    const [numbers, setnumbers] = useState(arrayCreator())
    const [value, setValue] = useState("")
    const [isPending, startTransition] = useTransition()
    const ChangeHandler = (event) => {
        setValue(event.target.value)
        startTransition(()=> setnumbers(arrayCreator(event.target.value)))
        // setnumbers(arrayCreator(event.target.value))
    }

    return (
        <>

        <p>value: {value}</p>

            <input type="text" value={value} onChange={ChangeHandler} />

            { isPending ? <h4>Loading...</h4> :
                numbers.map((number, index)=>(<p key={index}>{number}</p>))
            }
        </>
    )
}

export default TransitionComponent