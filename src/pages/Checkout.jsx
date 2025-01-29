import React from 'react'
import Shoppingcart from '../components/Shoppingcart'

const Checkout = () => {
  return (
    <section className='cart container'>
      <h1 className='fw-normal text-center'>Cart</h1>
      <Shoppingcart isCheckoutPage />
    </section>
  )
}

export default Checkout
