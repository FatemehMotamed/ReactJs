import React, {  useState } from 'react'
import api from '../services/config'

function Put() {
  const [title, setTitle] = useState("")
   const [id, setId] = useState("")
    const idHandler = (event)=>{
      setId(event.target.value)
    }
  const changeHandler = (event)=>{
    setTitle(event.target.value)
  }
  const PostData = async ()=>{
      api.put(`/posts/${id}`,{title}).then(async (req)=>{
        await console.log(req,"///////")
    }
    ).catch((error)=>{
        console.console.log(error,"------")
    })
    }
  return (
    <>
        <input type="text"  onChange={changeHandler} value={title} placeholder='title'/>
        <input type="text"  onChange={idHandler} value={id} placeholder='id'/>
        <button  onClick={PostData}>send</button>
    
    </>
  )
}

export default Put