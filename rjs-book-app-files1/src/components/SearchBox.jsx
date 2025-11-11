import { IoMdSearch } from "react-icons/io";
import styles from './SearchBox.module.css'
import { useState } from "react";
function SearchBox({addSearchList}) {
    const [searchKey,setSearchKey] = useState('')
    const changeHandler = (event)=>{
        setSearchKey(event.target.value)
    }
  return (
    <div className={styles.container}>
        <input type='text'  onChange={changeHandler} value = {searchKey} />
        <IoMdSearch className={styles.icon} onClick={()=> addSearchList(searchKey)} />
    </div>
  )
}

export default SearchBox