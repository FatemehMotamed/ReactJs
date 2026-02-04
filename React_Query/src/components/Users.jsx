import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Users() {
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log("fetch....")
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  
  const { data, isLoading, error, isError, isFetching , refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    //  gcTime:500000

    // retry: 1,
    // staleTime: 5 * 60 * 1000, 
    // refetchOnMount: false
    // refetchOnWindowFocus:false
    // enabled:false,
    onSuccess : ()=> console.log("successsss")

  })
   
  console.log({ data, isLoading, error, isError, isFetching} )
  if (isLoading) {
    return <div>Loading users...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  console.log("Users data:", data)

  return (
    <div>
      <h1>HomePage</h1>
      {/* <button onClick={refetch}>Get</button>
      {isLoading && isFetching && <div>Loading users...</div>} */}
      <p>Total users: {data?.length}</p>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users