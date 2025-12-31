import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/UsersSlice'
function Users() {
    const dispath = useDispatch()
    const users = useSelector((state)=>state.users)
    console.log(users)
    useEffect(()=>{
        dispath(fetchUsers())

    },[])
  return (
    <div>Users</div>
  )
}

export default Users