import React from 'react'

const Checkout = () => {
  return (
    <section className='cart container'>
      <h1 className='text-center fw-light pb-4'>Cart</h1>
      <ul className='cart-list'>
        <li className="d-flex">
          <img src="/src/assets/images/placeholderproduct.png" className='img-cart' alt="Product" />
          <div className="d-flex flex-column w-100 ps-2 justify-content-md-between">
            <div className='d-flex justify-content-between'>
              <div>
                <p className='cart-brand'>Brand</p>
                <p className="product">Product</p>
              </div>
              <button className='cart-remove' aria-label="Remove item"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="d-flex align-items-center">
                <button aria-label="Decrease quantity" className='quantity-btn'><i className="fa-solid fa-minus"></i></button>
                <span className="mx-2 quantity-cart">1</span>
                <button aria-label="Increase quantity" className='quantity-btn'><i className="fa-solid fa-plus"></i></button>
              </div>
              <p>Total <span className='current-price fw-bold'>200 kr</span></p>
            </div>
          </div>
        </li>
      </ul>
      <hr />
      <p className='text-end mb-4 fs-6'>Order total <span className='total-price fw-bold'>200 kr</span></p>
    </section>
  )
}

export default Checkout