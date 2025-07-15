
import NavBar from '../components/NavBar'

function MainLayout({children}) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default MainLayout