import React from 'react'
import { useCart } from '../contexts/CartProvider'
import { shortenText } from '../helpers/helper'
import NumberProduct from './NumberProduct'

function Cart() {
  const {state,dispatch} = useCart()
  const {cartProducts} = state
  return (
    <div style={{display:"flex", flexDirection:"column",gap: "50px"}}>
    {cartProducts && 
    cartProducts.map((product)=>(
      <div key={product.product.id} style={{display:"flex", flexDirection:"row", gap: "50px"}}>
        <img src={product.product.image}  width="50px" height="50px"/>
        <p>{shortenText(product.product.title)}</p>

        <NumberProduct number={product.number} product={product.product} />
        
      </div>
    )) 
    }
    </div>
  )
}

export default Cart