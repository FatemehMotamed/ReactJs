import React, { useEffect, useState } from 'react'
import { useProduct } from '../contexts/ProductProvider'
import Products from '../pages/Products'
import {  useSearchParams } from 'react-router-dom'
import { filterDAta } from '../helpers/helper'

function Search() {
    
  const [query, setQuery] = useSearchParams()
  const {allProducts,dispatch} = useProduct()
  const [text, setText] = useState('')
  useEffect(()=>{
        setText(query.get("search") || "")
  },[])
  const changeHandler = (event)=> {
    setText(event.target.value)
  }
  const searchHandler = ()=>{
    let queryObj = Object.fromEntries([...query])
    const category =query.get("category")
    let data
    if (text ===""){
        data = filterDAta(allProducts, category,null)
        dispatch({type: "set products", payload: data})
        delete queryObj["search"]
        setQuery(queryObj)
        return
    }
    setQuery({ ...queryObj, search: text })
    data = filterDAta(allProducts, category,text) 
    dispatch({type: "search", payload: data})
  }
  return (
    <>
        <input type='text' onChange={changeHandler} value={text} />
        <button onClick={searchHandler}>search</button>

    </>
  )
}

export default Search