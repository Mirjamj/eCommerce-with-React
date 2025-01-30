import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Cartitem from './Cartitem'
import { clearCart } from '../../store/features/products/ShoppingCart/shoppingCartSlice'

// Shoppingcart component: Displays the cart items and checkout options
const Shoppingcart = ({ setIsOpen, isCheckoutPage }) => {

  // Accessing cart data and total price from Redux store
  const { cart, totalPrice } = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch() // Initializing Redux dispatch function

  return (
    <div className='p-2'>
      <div>
        {/* Display message if the cart is empty */}
        {
          cart.length <= 0 && (
            <div>
              <p>Your cart is empty</p>
            </div>
          )
        }

        {/* Display items section if the cart has products */}
        {
          cart.length > 0 && (
            <div>
              <p className='m-2'>Your items</p>
            </div>
          )
        }

        {/* Render each cart item */}
        {
          cart.map(item => (
            <Cartitem key={'cart_' + item.product._id} item={item} />
          ))
        }
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className='m-0'>Total: {totalPrice} kr</p>

        {/* If on the checkout page, show 'Place order' button; otherwise, show 'Checkout' link */}
        {
          isCheckoutPage
            ? <button onClick={() => dispatch(clearCart())} className='btn btn-main'>Place order</button>
            : <Link onClick={() => setIsOpen(false)} className='btn btn-main' to="/checkout">Checkout</Link>
        }
      </div>
      {
        cart.length > 0 && ( // Check if the cart has items; only show the button if true
          <button onClick={() => dispatch(clearCart())} className="btn btn-link p-0">
            Clear Cart
          </button>
        )
      }
    </div>
  )
}

export default Shoppingcart