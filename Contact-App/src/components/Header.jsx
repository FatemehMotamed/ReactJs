
import styles from "./Header.module.css"
const Header = ()=> {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <div className={styles.subtitle}>

            <div className={styles.badge}>
                <a href="https://botostart.ir">Botostart</a>
            </div>
            <div className={styles.title}>| React.js Full Course</div>

        </div>
        
    </div>
    
  )
}

export default Header