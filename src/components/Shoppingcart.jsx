import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Cartitem from './Cartitem'
import { clearCart } from '../store/features/products/ShoppingCart/shoppingCartSlice'

const Shoppingcart = ({ setIsOpen, isCheckoutPage }) => {

  const { cart, totalPrice } = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

  return (
    <div className='p-2'>
      <div>
        {
          cart.length <= 0 && (
            <div>
              <p>Your cart is empty</p>
            </div>
          )
        }
        {
          cart.length > 0 && (
            <div>
              <p className='m-2'>Your items</p>
            </div>
          )
        }
        {
          cart.map(item => (
            <Cartitem key={'cart_' + item.product._id} item={item} />
          ))
        }
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className='m-0'>Total: {totalPrice} kr</p>
        {
          isCheckoutPage
            ? <button onClick={() => dispatch(clearCart())} className='btn btn-main'>Place order</button>
            : <Link onClick={() => setIsOpen(false)} className='btn btn-main' to="/checkout">Checkout</Link>
        }
      </div>
    </div>
  )
}

export default Shoppingcart