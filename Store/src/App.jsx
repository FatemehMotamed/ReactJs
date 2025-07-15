import { Navigate, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import ProductSinglePage from "./pages/ProductSinglePage"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/PageNotFound"
import ProductProvider from './contexts/ProductProvider'
import MainLayout from "./layouts/MainLayout"
import CartProvider from "./contexts/CartProvider"

function App() {
  

  return (
    <ProductProvider>
      <CartProvider>
        <MainLayout>

        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductSinglePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </MainLayout>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
