import React, { useContext, useState } from 'react'
import { UserContext } from "../contexts/UserProvider"

function Form() {
  const {users, setUsers} = useContext(UserContext)
  const [name,setName] = useState("")
  const clickHandler = ()=>{
    
    setUsers((users)=>[...users,{id:Math.random(100),name }])
  }
  return (
    <div>
        <input type='text' value={name} onChange={(event)=>setName(event.target.value)} />
        <button onClick={clickHandler} >Add</button>
    </div>
  )
}

export default Form