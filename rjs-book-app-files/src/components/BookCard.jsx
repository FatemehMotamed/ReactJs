/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './BookCard.module.css'
import { FaHeart } from "react-icons/fa";

function BookCard({book:{id, title, author, country, pages,image}, FavHandler}) {
  const [heartState, setHeartState] = useState(false)
  const likeHandler = ()=>{
    setHeartState((heartState) => !heartState)
    FavHandler({id: id, title:title, image:image})
  }
  return (
    <div className={styles.container}>
        <img src={image} alt={title} />
        <div className={styles.text}>
          <h4>{title}</h4>
          <p>{author}</p>
          <div className={styles.spans}>
            <span>{country}</span>
            <span>{pages} pages</span>
          </div>
        </div>
        <FaHeart className={heartState ? `${styles.heartOn}` : `${styles.heartOff}` } onClick={likeHandler} />
    </div>
  )
}

export default BookCard