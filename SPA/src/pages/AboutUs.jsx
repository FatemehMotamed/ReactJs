
import { Link, Outlet } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function AboutUs() {
  return (
    <MainLayout>
      <div>AboutUs.</div>
      <Link to="programmers" >Programmers</Link>
      <Link to="users" >Users</Link>
      <Outlet />
    </MainLayout>
  )
}

export default AboutUs