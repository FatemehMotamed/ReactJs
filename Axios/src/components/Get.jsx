import React, { useEffect } from 'react'
import api from '../services/config'
function Get() {
  useEffect(()=>{
    const getDAta = async ()=>{
      api.get("/todos").then(async (req)=>{
        await console.log(req,"///////")
    }
    ).catch((error)=>{
        console.console.log(error,"------")
    })
    }
    getDAta()
  },[])
  return (
    <div>Get</div>
  )
}

export default Get