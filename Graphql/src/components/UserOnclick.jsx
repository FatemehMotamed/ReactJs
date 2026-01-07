import { useLazyQuery } from "@apollo/client/react"
import { useState } from "react"
import { GET_USER } from "../graphql/queries"



function UserOnclick() {
    const [id, setId] = useState(2)
    const [getUserById,{loading,data,error,called}] = useLazyQuery(GET_USER)
    console.log({loading,data,error,called})
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>
    return (
        <>

            <input type="text"  value={id} id="" onChange={(e) => setId(e.target.value)} />
            <input type="button" value="send" onClick={()=>getUserById({ variables: { id:id} })} />
           

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

export default UserOnclick