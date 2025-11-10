import React, { useState } from 'react'

function Form() {
    const data = {
        "username":"",
        "password":"",
        "role":"",
        "gender":"",
        "remember":false
    }
    const [form, setForm] = useState(data)
    const formHandler = (event)=>{

        console.log(form)
        event.preventDefault()

    }
    const changeHandler = (event)=>{
        const {name, value, checked} = event.target
       
        if( name == "remember" ){
            setForm({...form, [name]:checked} )     
        }
        else{

            setForm({...form, [name]:value} )
        }
    }
    return (
        <form onSubmit={formHandler}>
            <input type="text" name="username" value={form.username} onChange={changeHandler} />
            <input type="Password" name="password"  value={form.password} onChange={changeHandler}  />
            <select name="role"  value={form.role}  onChange={changeHandler} >
                <option value="user"> User </option>
                <option value="admin"> Admin </option>
                <option value="superuser"> Super User </option>
            </select>
            <label htmlFor="gender" >female</label>
            <input type="radio" name="gender"  value="female"  onChange={changeHandler} />
            <label htmlFor="male" >male</label>
            <input type="radio" name="gender" value="male" onChange={changeHandler} />
            <label htmlFor="other" >other</label>
            <input type="radio" name="gender" value="other"  onChange={changeHandler} />
            <input type="checkbox" name="remember" value={form.remember}  checked={form.remember}  onChange={changeHandler}/>remember
            <button type="submit" >Login</button>
        </form>
    )
}

export default Form