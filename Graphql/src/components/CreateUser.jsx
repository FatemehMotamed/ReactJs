import { useMutation } from '@apollo/client/react'
import React from 'react'
import { CREATE_USER } from '../graphql/mutations'

function CreateUser() {
    const [CreatUser, {data, loading, error, called}] = useMutation(CREATE_USER,{
       variables: {
    username: "fatemeh",
    name: "mona",
    email: "mona@gmail.com"
                }
    })
    console.log(data)
  return (
    <>
    <button onClick={()=>CreatUser()}>Create</button>
    </>
  )
}

export default CreateUser