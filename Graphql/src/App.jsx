import Users from "./components/Users"
import { useQuery } from "@apollo/client/react";
import { gql } from '@apollo/client';
import User from "./components/User";
import UserOnclick from "./components/UserOnclick";
import CreateUser from "./components/CreateUser";

import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";



function App() {


 
  return (
    <>
    {/* <Users /> */}
    {/* <User /> */}
    {/* <UserOnclick /> */}
    {/* <CreateUser /> */}
    {/* <UpdateUser/> */}
    <DeleteUser />
    </>
  )
}

export default App
