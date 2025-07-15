import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function Products() {
  const [query,setQuery] = useSearchParams()
  const navigate = useNavigate()
  console.log(query.get("sort"))
  const products = [
    {id:1, name: "product 1"},
    {id:2, name: "product 2"},
    {id:3, name: "product 3"},
  ]
  const clickHandler = ()=>{
    setQuery({sort: "dsc", order: "sale"})
  }
  const HomeHandler = ()=>{
    navigate("/", {replace:true})
    // navigate(1)
    // navigate(-1)
  }
  return (
    <MainLayout>
        <button onClick={clickHandler} >set query</button>
        {products.map((product)=>(<Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link>))}
        <button onClick={HomeHandler}>Go Home</button>
    </MainLayout>
  )
}

export default Products