import React, { useState } from 'react'
import styles from './Contacts.module.css'
import ContactList from './ContactList'
import inputs from '../constants/inputs'
import { v4 } from 'uuid'

const Contacts= () => {
  const [contacts, setContacts] = useState([])
  const data = {
    id:'',
    name:'',
    last_name:'',
    email:'',
    phone:'',
  }
  const [form, setForm ] = useState(data); 
  const [status, setStatus] = useState(false)
  const changeHandler = (event)  =>{
    const value= event.target.value
    const name= event.target.name
    setForm((form) => ({...form, [name]:value }))
    // setForm({...form, [name]:value })
  }
  const submitHandler= (event)=>{
    
    console.log(form,"++++")
    if (!form.name || !form.last_name || !form.email || !form.phone){
      console.log("please enter valid data")
      setStatus(true)
    }
    else{
      console.log(form)
      const newContact = {...form, id: v4()}
      setContacts((contacts) => ([...contacts, newContact]) )
      console.log("*********",contacts)
      setForm(data)
      setStatus(false)
    }
    event.preventDefault()
  }
  const removeHandler = (id) =>{
    const data = contacts.filter(item => item.id != id)
    setContacts(data)
}
  return (
      <>
        <form onSubmit={submitHandler} className={styles.container} >
         {
          inputs.map((input,index)=> (<input key={index} type={input.type} placeholder={input.placeholder} name={input.name} value={form[input.name]} className={styles.inputBox}  onChange={changeHandler}  />
          ))
         }

            {/* <input type='text' placeholder='Name' name='name' className={styles.inputBox}  onChange={changeHandler} value={form.name} />
            <input type='text' placeholder='Last Name' name='last_name' className={styles.inputBox} value={form.last_name} onChange={changeHandler} />
            <input type='text' placeholder='Email' name='email' className={styles.inputBox} value={form.email} onChange={changeHandler} />
            <input type='number' placeholder='Phone' name='phone' className={styles.inputBox} value={form.phone} onChange={changeHandler} /> */}

            <button className={styles.btn}>Add Contact</button>
        </form>
        <div className={status ? styles.error : styles.errorHide} >Please Enter Valid Data</div>

        <ContactList contacts= {contacts}  removeHandler={removeHandler}/>
      </>



  )
}

export default Contacts