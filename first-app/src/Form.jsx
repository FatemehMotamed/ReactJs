import { useState } from "react"


const Form = () =>{
    const data = {
        username: "username",
        password: "password",
        role: "role",
        gender: "female",
        remember: true
    }
    const [form, setForm] = useState(data)
    
    const FormHandler = (event)=>{
        console.log(form)
        event.preventDefault()
        
    }
    const changeHandler =(event) =>{
        const name = event.target.name
        const value = event.target.value
        if (name === "remember") {
            
            setForm({...form, remember:true })
        }
        else{
            setForm({...form, [name]: value })

        }
    }
    
  return (
    <form onSubmit={FormHandler}>
        
        <input type="text" name="username" value={form.username} onChange={changeHandler} />
        <input type="Password" name="password" value={form.password} onChange={changeHandler} />
        <select name = "role" value={form.role} onChange={changeHandler} >
            <option value="user"> User </option>
            <option value="admin"> Admin </option>
            <option value="superuser"> Super User </option>
        </select>
        <label htmlFor="gender" >female</label>
        <input type="radio" name="gender" id="female" value={form.gender} checked={form.gender === "female"} onChange={changeHandler} />
        <label htmlFor="male" >male</label>
        <input type="radio" name="gender" id="male" value={form.gender} checked={form.gender === "male"} onChange={changeHandler} />
        <label htmlFor="other" >other</label>
        <input type="radio" name="gender" id="other" value={form.gender} checked={form.gender === "other"} onChange={changeHandler}/>
        <input type="checkbox" name="remember" value={form.remember} checked={form.remember}  onChange={changeHandler}/>remember
        <button type="submit" >Login</button>
    </form>
  )
}

export default Form