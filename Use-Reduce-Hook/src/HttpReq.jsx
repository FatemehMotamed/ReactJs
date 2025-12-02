import React, { useEffect, useReducer } from 'react'
const initialState ={
    isLoading: false,
    error: "",
    data: []
}
const reducer = (state, action)=>{
    switch (action.type){
        case "Success":
            return {...state, data: action.payload, isLoading: true}
        case "Failed":
            return {...state, isLoading: false, error: action.payload}
        default:
            throw new Error("action not valid")
    }
}
function HttpReq() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{
    const getData = async ()=>{
        await fetch("https://jsonplaceholder.typicode.com/posts").then(async (res)=>{
            const data = await res.json()
            dispatch({type: "Success", payload: data})
        }).catch((error)=>{
            dispatch({type: "Failed", payload: error.message})
        })

    }
    getData()
  },[])
  return (
    <>
    {state.isLoading ? "" : <p>...Loading</p>}
    {state.error.length>0 && <p>{state.error}</p>}
    {state.isLoading && state.data.map((post)=>(<p key={post.id}>{post.title}</p>))}
    </>
  )
}

export default HttpReq