import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../contexts/ProductProvider'
import { productDetails } from '../helpers/helper'

function ProductSinglePage() {
  const {id} = useParams()
  const {products} = useProduct()
  const product = productDetails(products,id)
  // console.log(product[0].title,"$$$$$$$$$$$$$$$$$")
  return (
    <div>
      <img src={product.image} width="300px" height="300px" />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductSinglePage