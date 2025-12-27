import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function CustomComponent() {
    const[name, setName] = useLocalStorage("name", "")
  return (
    <>
    <p>Name: {name}</p>

    <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
    
    </>
  )
}

export default CustomComponent