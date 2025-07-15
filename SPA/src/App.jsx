
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import AboutUs from "./pages/AboutUs"
import PageNotFound from "./pages/404"
import Products from "./pages/Products"
import ProductSinglePage from "./pages/ProductSinglePage"
import Programmers from "./components/Programmers"
import Users from "./components/Users"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/landing" element={<Navigate to="/" replace />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductSinglePage />}/>

        <Route path="/about-us" element={<AboutUs />}>

          <Route path="programmers" element={<Programmers />} />
          <Route path="users" element={<Users />} />
        
        </Route>
        
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
