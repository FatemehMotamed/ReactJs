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

const addToCart =(state, product, number=1)  =>{
    const index = state.findIndex(item=>item.product.id == product.id)
    let newCartProducts = [...state];
    if (index!== -1){
        newCartProducts[index] = {...newCartProducts[index], number}
    }
    else{
        newCartProducts.push({product,number})
    }
    return newCartProducts
    
}

export {shortenText, filterDAta, addToCart}