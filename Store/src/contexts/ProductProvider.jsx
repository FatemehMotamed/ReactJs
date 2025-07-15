import React, { createContext, useEffect, useReducer, useContext } from 'react'
import api from '../services/config'
import tempData from '../services/tempDAta'
import { filterDAta } from '../helpers/helper'
import { useSearchParams } from 'react-router-dom'
const ProductsContext = createContext()
const initialState = {
    products:[],
    allProducts: [],
    isLoading: false,
}
const reducer = (state, action) =>{
    switch (action.type){
        case "initial data":
            return {...state, products: action.payload, allProducts: action.payload}
        case "set products":
            return {...state, products: action.payload}
        case "data is load":
            return {...state, isLoading: true}
        case "data not load":
            return {...state, isLoading: false}
        case "search":
            return {...state, products: action.payload}
        default:
            throw new Error("use current action in reducer")
    }
    
}

function ProductProvider({children}) {
 const [state, dispatch] = useReducer(reducer, initialState)
 const [query, setQuery] = useSearchParams()
 const category =query.get("category")
 const searchQuery = query.get("search")
 useEffect(()=>{
    const getProducts = async () =>{
        // const data = filterDAta(tempData,category, searchQuery )
        // dispatch({type: "initial data", payload: tempData})
        // dispatch({type: "set products", payload: data})
        // dispatch({type: "data is load"})
        await api.get("/products").then((req)=> {
            dispatch({type: "initial data", payload: req})
            dispatch({type: "set products", payload: req})
            dispatch({type: "data is load"})
            console.log(req,"+++")
        }).catch((error)=>{
            console.log(error.message)
            dispatch({type: "data not load"})
            }
        )
    }

    getProducts()
 },[])
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
        {children}
    </ProductsContext.Provider>
  )
}

// custom hook

const useProduct = () =>{
    const {state,dispatch}  = useContext(ProductsContext)
    const products= state.products
    const allProducts= state.allProducts
    const isLoading= state.isLoading
    return {products, isLoading, allProducts, dispatch}
}
// const useQuery = () =>{
//     const {query, setQuery}  = useContext(ProductsContext)
    
//     return {query, setQuery}
// }

export { useProduct }
export default ProductProvider