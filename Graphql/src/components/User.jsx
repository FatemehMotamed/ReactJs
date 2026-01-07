import { useQuery } from "@apollo/client/react"
import { useState } from "react"
import { GET_USER } from "../graphql/queries"

// const GET_USER = gql`
//     query getUser($id:ID!){
//         user(id: $id){
//             name,
//             email,
//             phone
//         }
//     }
// `
function User() {
    const [id, setId] = useState(2)
    const {loading,data,error} = useQuery(GET_USER, {
        variables: {
            id:id
        }
    })
    console.log(data)
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>
    return (
        <>

            <input type="text"  value={id} id="" onChange={(e) => setId(e.target.value)} />

            {
                data && (<>

                <h3>{data.user.name}</h3>
                <h4>{data.user.email}</h4>
                <h5>{data.user.phone}</h5>
                
                
                </>)
            }




        </>
    )
}

export default User