import React, { useEffect, useState, useCallback } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [id, setId] = useState("")

    useEffect(() => {
        if (!id) {
            setUsers([])
            return
        }

        const userController = new AbortController()
        let timeoutId

        const getUsers = async () => {
            setError(null)
            setIsLoading(true)

            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,
                    { signal: userController.signal })
                
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                
                const data = await res.json()
                
                if (!userController.signal.aborted) {
                    setUsers([data])
                    setIsLoading(false)
                }

            } catch (error) {
                if (error.name !== 'AbortError' && !userController.signal.aborted) {
                    setError(error.message)
                    setIsLoading(false)
                }
            }
        }

        // Debounce برای جلوگیری از requestهای زیاد
        timeoutId = setTimeout(getUsers, 500)

        return () => {
            clearTimeout(timeoutId)
            userController.abort()
        }

    }, [id])

    const changeHandler = (event) => {
        setId(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={changeHandler} value={id} placeholder="Enter user ID" />

            {isLoading && <h3>Loading...</h3>}
            {error && <p>Error: {error}</p>}

            {!isLoading && !error && users.map((user) => (
                <li key={user.id}>{user.title}</li>
            ))}
        </div>
    )
}

export default Users