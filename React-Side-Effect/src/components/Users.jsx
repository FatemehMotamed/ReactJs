import  { useEffect, useState } from 'react'
import Counter from './Counter'

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [userId, setUserId] = useState('') 
    useEffect(()=>{
        const userController = new AbortController()
        const getUsers = async ()=>{
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal: userController.signal}).then(
                async (res)=> {
                    if (!res.ok) { // اگر وضعیت HTTP نشانگر خطا باشد (مثل 404، 500 و ...)
                        throw new Error(`خطای HTTP! وضعیت: ${res.status}`);
                      }
                    const data = await res.json()
                    setUsers([data])
                    console.log(data)
                }
            ).catch((error)=>{
                // console.log(error.message)
                if (error.name != "AbortError"){

                    setError(true)
                }
            })


            // try {

            //     const res= await fetch("https://jsonplaceholder.typicode.com/userss");
            //     if (!res.ok) { // اگر وضعیت HTTP نشانگر خطا باشد (مثل 404، 500 و ...)
            //         throw new Error(`خطای HTTP! وضعیت: ${res.status}`);
            //       }
            //      const data = await res.json();
            //      setUsers(data);
            //  }
            //  catch (error){
            //          console.log(error)
            //          setError(true)
            //  }
        }
        
        getUsers()

        return () =>{
            userController.abort()
            console.log("aborted!")
        }

    }, [userId])

    const changeHandler = (event) =>{
        setUserId(event.target.value)
    }

    // const fetchUser = async ()=>{
    //     await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then( async (res) =>{
    //         const user = await res.json()
    //         await setUsers([user])
    //     }

    //     ).catch(()=>{
    //         console.log("user not found")
    //         setUsers([])
    //     }
    //     )
    // }

    return (

        
        <>

            {/* {userId>10 ? <Counter /> : '' } */}
            
            <input type='text' value={userId} onChange={changeHandler}/>
            {/* <button onClick={fetchUser}>search</button> */}
            {!users.length && !error && <p>loading</p>}
            { error && <p>something wrong</p>}
            { 
            users.map((user)=> (<p key={user.id}>{user.name}</p>))
            }
        </>
    )
}

export default Users