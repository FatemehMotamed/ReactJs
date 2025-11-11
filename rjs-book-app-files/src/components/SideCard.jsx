
import styles from './SideCard.module.css'
function SideCard({fav:{id,image, title}}) {
  return (
    <div key={id} className={styles.favItem}><img src={image} /> <p>{title}</p></div>
  )
}

export default SideCard