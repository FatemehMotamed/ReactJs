
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function ProductSinglePage() {
 const {id} = useParams()
  return (
    <MainLayout>ProductSinglePage # {id}</MainLayout>
  )
}

export default ProductSinglePage