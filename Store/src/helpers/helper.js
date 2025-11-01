const shortenText = (text)=>{
    return text.split(" ").slice(0,3).join(" ")
}

const filterDAta = (products,category, searchTxt)=>{
    let data
    if (category == null && searchTxt!=null){

        data = products.filter((item)=>(item.title.toLowerCase().includes(searchTxt.toLowerCase())))
    }
    else if(category != null && searchTxt==null){
        data = products.filter((item)=>(item.category.toLowerCase() === category.toLowerCase()))

    }
    else if(category == null && searchTxt==null){
        data = products
    }
    else{
        data = products.filter((item)=>(item.title.toLowerCase().includes(searchTxt.toLowerCase()) && item.category.toLowerCase() === category.toLowerCase()))
    }
    return data
}

const calculateTotal = (data)=>{
    const totalCount = data.reduce((sum, item) => sum + item.number, 0);
    const totalPrice = data.reduce((sum, item) => sum + item.product.price * item.number, 0).toFixed(2);
    return {totalCount,totalPrice}
}

const addToCart =(state, product, number=1)  =>{
    const index = state.findIndex(item=>item.product.id == product.id)
    let newCartProducts = [...state];
    if (index!== -1){
        newCartProducts[index] = {...newCartProducts[index], number}
    }
    else{
        newCartProducts.push({product,number})
    }
    // console.log('New cart after update:', newCartProducts);
    return newCartProducts
    
}

const removeFromCart = (state, product) =>{
    const index = state.findIndex(item=>item.product.id == product.id)
    let newState = [...state]
    newState = state.filter(item => item.product.id !== product.id)
    return newState

}
const productDetails = (products,id) =>{
    if (products.length > 0){
        const data =  products.filter((item)=>(item.id ==id))
        console.log(data,"!!!!!!!!!!!")
        return data[0]
    }
    else{
        console.log("@@@@@@@@@@@@@@@@@@")
        return ""
    }
}

export {shortenText, filterDAta, addToCart,removeFromCart,calculateTotal, productDetails}