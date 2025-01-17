import React from 'react'

const Product = () => {
  return (
    <a href="">
      <div className='product-card'>
        <img src="./src/assets/images/placeholderproduct.png" className='img-card' alt="" />
        <p className='ps-2 pt-2'>Macbook pro</p>
        <div className='d-flex justify-content-between ps-2'>
          <div className="price-info d-flex gap-2">
            <p className='old-price'>5000 kr</p>
            <p className='current-price'>3000 kr</p>
          </div>
          <span className='pe-2'>
            <i className="fa-solid fa-cart-plus pe-2"></i>
          </span>
        </div>
      </div>
    </a>
  )
}

export default Product