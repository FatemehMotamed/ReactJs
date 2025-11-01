import React from 'react'
import Bill from '../components/Bill'
import Cart from '../components/Cart'
import { useCart } from '../contexts/CartProvider'

function Checkout() {
  
  return (
    <div style={{display:"flex", gap:"100px"}}>

      <Bill />
      <Cart />

    </div>
  )
}

export default Checkout