import React from 'react'

const Cart = () => {
  return (
    <div className='cart container'>
      <h1 className='text-center fw-light pb-4'>Cart</h1>
      <div className="d-flex">
        <img src="/src/assets/images/placeholderproduct.png" className='img-cart' alt="Product" />
        <div className="d-flex flex-column w-100 ps-2 justify-content-md-between">
          <div>
            <p className='cart-brand'>Brand</p>
            <p className="product">Product</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className='btn btn-primary'>increase/decrease</button>
            <p>Total <span className='current-price fw-bold'>200 kr</span></p>
          </div>
        </div>
      </div>
      <hr />
      <p className='text-end mb-4 fs-6'>Order otal <span className='total-price fw-bold'>200 kr</span></p>
    </div>
  )
}

export default Cart