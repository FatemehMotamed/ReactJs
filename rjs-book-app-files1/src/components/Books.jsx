import books from '../constants/mockData.js'
import BookCard from './BookCard.jsx'
import styles from './Books.module.css'
import { useState } from 'react';
import SideCard from './SideCard.jsx';
import SearchBox from './SearchBox.jsx';

function Books() {
  const [searchList, setSearchList] = useState([]);
  const [flagkey, setFlagKey] = useState(false);
  const [favList , setFavList] = useState([]);

  const FavHandler=(item) => {

   
    if (favList.some((fav=> fav.id===item.id))){
      setFavList((favList) => favList.filter((fav) => fav.id!== item.id))
    }
    else{
      setFavList((favList) => [...favList, item])
    }

  }
  const addSearchList = (key)=>{
    setFlagKey(key)
    // 1. حذف فاصله‌های اضافه و تبدیل به حروف کوچک برای مقایسه یکسان
  const newKey = key.trim().toLowerCase();
  
  // 2. فیلتر پیشرفته با شرایط مختلف
  const newList = books.filter(book => {
  const bookTitle = book.title.toLowerCase();
    
    // 3. بررسی چند شرط مختلف برای تطابق بهتر
    return (
      bookTitle === newKey || // تطابق کامل
      bookTitle.includes(newKey) || // شامل کلید باشد
      bookTitle.startsWith(newKey) || // با کلید شروع شود
      bookTitle.split(' ').some(word => word === newKey) // تطابق کلمه به کلمه
    );
  });

  setSearchList(newList)
  console.log(newList)
    
  }
  return (
    <>
      <SearchBox addSearchList={addSearchList} />
      <div className={styles.container} >
      <div className={favList.length==0 ? `${styles.booksEmpty}` : `${styles.books}`}>
        {
          flagkey ? 
          searchList.map((book) => (<BookCard book={book}  key={book.id} FavHandler={FavHandler} />))
          :
          books.map((book) => (<BookCard book={book}  key={book.id} FavHandler={FavHandler} />))
 

        }

      </div>
      <div className={favList.length==0 ? `${styles.emptyFav}` : `${styles.favourite}`}>
        {favList.map((fav)=>(<SideCard key={fav.id} fav={fav} />))}
      </div>
      </div>
    </>
    
  )
}

export default Books