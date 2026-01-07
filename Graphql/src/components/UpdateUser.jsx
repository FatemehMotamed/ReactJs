import { useMutation } from '@apollo/client/react'
import React from 'react'
import { UPDATE_USER} from '../graphql/mutations'

function UpdateUser() {
    const [UpdateUser, {data, loading, error, called}] = useMutation(UPDATE_USER,{
       variables: {
            id: 2,
            name: "mona",
    
                }
    })
    console.log(data)
  return (
    <>
    <button onClick={()=>UpdateUser()}>Update</button>
    </>
  )
}

export default UpdateUser