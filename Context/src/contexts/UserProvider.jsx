
import { createContext, useState } from "react"

export const UserContext = createContext()

function UserProvider({children}) {
    const [users, setUsers] = useState([
        {id:1, name:"fatemeh"},
        {id:2, name:"mohammad"}
      ])
  return (
     <UserContext.Provider value={{users, setUsers, author: "fatemeh"}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider