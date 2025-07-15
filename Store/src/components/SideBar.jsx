import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProduct } from '../contexts/ProductProvider'
import { filterDAta } from '../helpers/helper'

function SideBar() {
  const [query, setQuery] = useSearchParams()
  let queryObj = Object.fromEntries([...query])
  const {allProducts,dispatch} = useProduct()
  const clickHandler = (event)=>{
    const selectedCategory = event.target.textContent
    const searchText = query.get("search")
    let data
    if (event.target.tagName === 'LI') {
        // console.log(event.target.textContent)
        if (selectedCategory == "All"){
          data = filterDAta(allProducts, null,searchText)
          dispatch({type: "set products", payload: data})
          delete queryObj["category"]
          setQuery({...queryObj})
          return
        }
        data = filterDAta(allProducts, selectedCategory,searchText)
        console.log(data)
        dispatch({type: "search", payload: data})
        setQuery({ ...queryObj, category: event.target.textContent })
        
        
    }
  }
  return (
   <>
      <ul style={{listStyleType:"none"}} onClick={clickHandler}>
      <h3>Categories</h3>
      <li>All</li>
      <li>Electronics</li>
      <li>Jewelery</li>
      <li>Men's Clothing</li>
      <li>Women's Clothing</li>
    </ul>
   
   </>
  )
}

export default SideBar