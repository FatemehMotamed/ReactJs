import React, { createContext, useContext, useReducer } from 'react'
import { addToCart } from '../helpers/helper'
const initialState = {
  cartProducts : [],
  totalCount:0,
  totalPrice:0,
  checkout:false
}
const reducer = (state, action)=>{
  switch (action.type) {
    case "ADD PRODUCT":
      {
      const {product, number} = action.payload
      const data = addToCart(state.cartProducts, product, number )

      const totalCount = data.reduce((sum, item) => sum + item.number, 0);
      const totalPrice = data.reduce((sum, item) => sum + item.product.price * item.number, 0);
      
      return {
        cartProducts: data,
        totalCount,
        totalPrice,
        checkout:false
        
      } 
    }

    default:
      throw new Error("Invalid Action")


  }
}
const CartContext = createContext()
function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <CartContext.Provider value={{state,dispatch}}>

      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const {state, dispatch} = useContext(CartContext)
  return {state,dispatch}
}

export {useCart}

export default CartProvider