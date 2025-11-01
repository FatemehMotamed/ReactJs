

import { RiListCheck2 } from "react-icons/ri";

import { Link } from 'react-router-dom';
import {  shortenText } from "../helpers/helper";
import NumberProduct from "./NumberProduct";
import { useCart } from "../contexts/CartProvider";
import { useState } from "react";
function ProductCard({product}) {
  const {id, title, price, image} = product
  const {state,dispatch} = useCart()
  // const [number, setNumber] = useState(0)
  // const number = state.cartProducts.filter((item)=>(item.product.id == id ? number=item.number : number=0))

  const foundItem = state.cartProducts.find((item) => item.product.id === id);
  const number = foundItem ? foundItem.number : 0
  console.log(number,"&&&&&&&&&&&&&&&&&&&&&")
  return (
    <div style={{maxWidth:"180px"}} >

        {/* <img src={image} width="150" height="200"  /> */}
        <p>{shortenText(title)}</p>
        <p>${price}</p>
        <Link to={`/product/${id}`}><RiListCheck2 color='red'/></Link>
        
        
        <NumberProduct product={product} number={number}  />

        

        {state.cartProducts.map((item)=>(<p key={item.product.id}>Number:{item.number}</p>))}
        

    </div>
  )
}

export default ProductCard