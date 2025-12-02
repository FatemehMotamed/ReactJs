import styles from './layouts.module.css'

function Layouts({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p> React.js full course</p>

        </header>

        {children}

        <footer className={styles.footer}>
            <p>Developed by fatemeh motamed</p>
        </footer>        
    </>
  )
}

export default Layouts