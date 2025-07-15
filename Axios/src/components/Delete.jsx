import React, {  useState } from 'react'
import api from '../services/config'

function Delete() {
  const [id, setId] = useState("")
  const changeHandler = (event)=>{
    setId(event.target.value)
  }
  const PostData = async ()=>{
      api.delete(`/posts/${id}`).then(async (req)=>{
        await console.log(req,"///////")
    }
    ).catch((error)=>{
        console.console.log(error,"------")
    })
    }
  return (
    <>
        <input type="text"  onChange={changeHandler} value={id}/>
        <button  onClick={PostData}>send</button>
    
    </>
  )
}

export default Delete