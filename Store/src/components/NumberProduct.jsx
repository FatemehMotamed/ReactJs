import { useCart } from "../contexts/CartProvider";

import { MdDelete } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { useState } from "react";

function NumberProduct({product, number}) {

  const {state, dispatch} = useCart()
  const [num, setNum] = useState(number)
  console.log(number,"ppppppppppp")

  const deleteHandler = ()=>{
    dispatch({type:"DELETE PRODUCT", payload: product})
    setNum(0)
  
  }
  
  const changeNumber = (event)=>{
    const value = event.target.value
    let newNumber=0
    if (value==""){
      newNumber=0
      dispatch({type:"DELETE PRODUCT", payload: product})
    }
    else{
      newNumber = parseInt(value)
    }
    
    setNum(newNumber)
    dispatch({type:"ADD PRODUCT", payload: {product, number:newNumber}})
  }
  const decNumber = ()=>{
    const newNumber =number-1
    
    setNum(newNumber)
        
    // const data = addToCart(state.ProductCard, product,newNumber)
    dispatch({type:"ADD PRODUCT", payload: {product, number:newNumber}})
    console.log(state)
  }
  const addProducct = ()=>{
    const newNumber =number+1
     console.log(newNumber,"tttttttttttttttttttttt")
    setNum(newNumber)
    dispatch({type:"ADD PRODUCT", payload: {product, number:newNumber}})
    console.log(state,"***")
  }
  return (
    <>
    {number>0 ?
        <div style={{display:"flex"}}>
            <button onClick={addProducct}>+</button>
            <input type="text" style={{width:"20px"}} value={num} onChange={changeNumber}/>
            
            {
            number==1 ?
            <MdDelete  onClick={deleteHandler}  /> :
            <button onClick={decNumber}>-</button>
            }
        </div>
        :
        (<><IoBagCheck onClick={addProducct} /><p>{number}</p></>)
        
        }
    </>
  )
}

export default NumberProduct