import React, {  useState } from 'react'
import api from '../services/config'

function Post() {
  const [title, setTitle] = useState("")
  const changeHandler = (event)=>{
    setTitle(event.target.value)
  }
  const PostData = async ()=>{
      api.post("/posts",{title}).then(async (req)=>{
        await console.log(req,"///////")
    }
    ).catch((error)=>{
        console.console.log(error,"------")
    })
    }
  return (
    <>
        <input type="text"  onChange={changeHandler} value={title}/>
        <button  onClick={PostData}>send</button>
    
    </>
  )
}

export default Post