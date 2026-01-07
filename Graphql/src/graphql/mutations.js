import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation addUser(
        $name: String!,
        $username: String!,
        $email: String!,
    ){
  
        createUser(input:{
            username: $name,
            name: $username,
            email: $email
                        }){
                            id,
                            name
                        }
                        
        }
 `

 const UPDATE_USER = gql`
 mutation updateUser(
    $id: ID!,
    $name: String!,
 ){
  updateUser(
    id:$id
    input:{
      name : $name
    }
  ){
    id,
    name,
    email
  }
  
}
 `

 const DELETE_USER = gql`
 
  mutation deleteuser(
        $id: ID!,
  ){
     deleteUser(id:$id)
  }
 `

 export {CREATE_USER,UPDATE_USER,DELETE_USER}


