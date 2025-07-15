
import { useProduct } from '../contexts/ProductProvider'
import Loader from './Loader'
import ProductCard from './ProductCard'


function ProductList() {
  const {products, isLoading} = useProduct()
  return (
        <div style={{display: "flex", gap: "30px", width:"75%",flexWrap:"wrap"}} >
            {
            isLoading ? 
                 products?.map((product) => (
                <ProductCard key={product.id} product = {product} />
            )) : 
              <Loader />

            
            }
        </div>
    )
}

export default ProductList