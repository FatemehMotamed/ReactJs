import React, { useEffect } from 'react'
import api from '../services/config'

function MultiRequest() {
  useEffect(() => {
    const getDAta = async () => {
      try {
        const [todos, users, posts] = await Promise.all([
          api.get("/todos"),
          api.get("/users"),
          api.get("/posts"),
        ])
        
        console.log(todos, "******")
        console.log(users, "++++")
        console.log(posts, "///////")
      } catch (error) {
        console.log(error, "------")
      }
    }
    getDAta()
  }, [])
  
  return <div>Multi Request</div>
}

export default MultiRequest




// import React, { useEffect } from 'react'
// import api from '../services/config'

// function MultiRequest() {
//  useEffect(()=>{
//     const getDAta = async ()=>{
//       api.all([
//        await api.get("/todos"),
//        await api.get("/users"),
//        await api.get("/posts"),
//       ]).then(
//         api.spread((todos, users, posts) => {

//               console.log(todos, "******")
//               console.log(users, "++++")
//               console.log(posts, "///////")
//         }
//           )
    
//     ).catch((error)=>{
//         console.console.log(error,"------")
//     })
//     }
//     getDAta()
//   },[])
//   return (
//     <div>Multi Request</div>
//   )
// }

// export default MultiRequest