
import { IoBagCheck } from "react-icons/io5";
import { RiListCheck2 } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {  shortenText } from "../helpers/helper";
import { useCart } from "../contexts/CartProvider";
import { useState } from "react";
function ProductCard({product}) {
  const {id, title, price, image} = product
  const [number, setNumber] = useState(0)
  const {state, dispatch} = useCart()
  
  const changeNumber = (event)=>{
    setNumber(event.target.value)
  }
  const decNumber = ()=>{
    const newNumber =number-1
    if (newNumber<0){
      setNumber(0)
      return
    }
    else{

      setNumber(newNumber)
      
    }   
    // const data = addToCart(state.ProductCard, product,newNumber)
    dispatch({type:"ADD PRODUCT", payload: {product, number:newNumber}})
    console.log(state)
  }
  const addProducct = ()=>{
    const newNumber =number+1
    setNumber(newNumber)
    dispatch({type:"ADD PRODUCT", payload: {product, number:newNumber}})
    console.log(state,"***")
  }
  return (
    <div style={{maxWidth:"180px"}} >

        {/* <img src={image} width="150" height="200"  /> */}
        <p>{shortenText(title)}</p>
        <p>${price}</p>
        <Link to={`/product/${id}`}><RiListCheck2 color='red'/></Link>
        {number>0 ?
        
        <div style={{display:"flex"}}>
          <button onClick={addProducct}>+</button>
          <input type="text" style={{width:"20px"}} value={number} onChange={changeNumber}/>
          <button onClick={decNumber}>-</button>
        </div>

        :
        (<IoBagCheck onClick={addProducct} />)
        
        }

        {state.cartProducts.map((item)=>(<p key={item.product.id}>Number:{item.number}</p>))}
        

    </div>
  )
}

export default ProductCard