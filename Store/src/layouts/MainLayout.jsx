import React from 'react'

import { GiShoppingCart } from "react-icons/gi";
import { useCart } from '../contexts/CartProvider';
import { Link } from 'react-router-dom';
function MainLayout({children}) {
  const {state} = useCart()
  return (
    <div>
        <header>
            <Link to="/checkout">
                <div style={{display:"flex"}}>shop
                  <GiShoppingCart />
                  <p>{state.totalCount}</p>
                </div>
            </Link>
        </header>
        {children}
        <footer>By Fatemeh Motamed</footer>
    </div>
  )
}

export default MainLayout