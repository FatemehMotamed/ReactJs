import { useMutation } from '@apollo/client/react'
import React, { useState } from 'react'
import { DELETE_USER} from '../graphql/mutations'

function DeleteUser() {
    const [id, setId] = useState(2)
    const [DeleteUser, {data, loading, error, called}] = useMutation(DELETE_USER,{
       variables: {
            id: id,
    
                }
    })
    console.log(data)
  return (
    <>
    <input type='text' value={id}  onChange={(e)=>setId(e.target.value)}/>
    <button onClick={()=>DeleteUser()}>delete</button>
    </>
  )
}

export default DeleteUser