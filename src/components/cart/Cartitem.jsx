import { useDispatch } from 'react-redux'
import { addToCart, removeItem, removeOne } from '../../store/features/products/ShoppingCart/shoppingCartSlice'

// Cartitem component: Displays an individual item in the cart and allows quantity adjustments
const Cartitem = ({ item }) => {

  const dispatch = useDispatch() // Initializing the Redux dispatch function

  // Function to increase the quantity of the item in the cart
  const addItemToCart = () => {
    dispatch(addToCart(item.product))
  }

  // Function to decrease the quantity of the item (removes one unit)
  const removeItemFromCart = () => {
    dispatch(removeOne(item.product._id))
  }

  // Function to completely remove the item from the cart
  const deleteItem = () => {
    dispatch(removeItem(item.product._id))
  }

  return (
    <div className='d-flex justify-content-between align-items-center border-bottom mb-2 pb-2'>
      <div className="d-flex">
        <div className="img-cart-dropdown">
          <img src={item.product.images[0]} alt={item.product.name} />
        </div>
        <div className='ps-2'>
          <p className='text-small text-truncate fw-bold my-1 cart-name'>{item.product.name}</p>
          <p className='text-small my-1'>{item.quantity} x {item.product.price} kr</p>
        </div>
      </div>
      <div className='d-flex gap-2'>
        <div>
          <button onClick={removeItemFromCart} aria-label="Decrease quantity" className='quantity-btn text-small'><i className="fa-solid fa-minus"></i></button>
          <button onClick={addItemToCart} aria-label="Increase quantity" className='quantity-btn text-small'><i className="fa-solid fa-plus"></i></button>
        </div>
        <button onClick={deleteItem} className='cart-remove text-small' aria-label="Remove item"><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default Cartitem