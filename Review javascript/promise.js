const w=new Promise((resolve,reject)=>{

    setTimeout(()=>{
    console.log("test")
    resolve("Success");
    },1000)
    console.log("2")

})

console.log(w);
w.then((response)=>{
    console.log(response)
    console.log(w);
})

w.catch(()=>{
    console.log("faild")
    console.log(w);
})



