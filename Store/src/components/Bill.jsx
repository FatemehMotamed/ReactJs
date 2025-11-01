
import { useCart } from '../contexts/CartProvider'

function Bill() {
 const {state, dispatch} = useCart()
  return (
    <div>
        <p>total: {state.totalPrice} $</p>
        <p>Quantity: {state.totalCount} </p>
        <p>status: {state.checkout ? 'payed' : 'pending'} </p>
    </div>
  )
}

export default Bill