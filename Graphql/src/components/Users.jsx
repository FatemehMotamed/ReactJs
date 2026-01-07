import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "../graphql/queries";
// import { gql } from '@apollo/client';
// const GET_USERS = gql`
//     query{
//         users{
//             data{
//                 name,
//                 email,
//                 phone,
//                 todos{
//                     data{
//                         title,
//                         completed
//                 }
//             }
//         }
//         }
// }
//   `;

function Users() {

    // const response = useQuery(GET_USERS)
    const {data,loading,error} = useQuery(GET_USERS)
    console.log(data)

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>

    return (
       <>
        {
            data.users.data.map((user)=>(<p key={user.id}>{user.name}</p>))
             
        }
       </>
    )
}

export default Users