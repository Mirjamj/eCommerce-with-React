import React from 'react'

const Productpage = () => {
  return (
    <div className='container d-md-flex'>
      <img src="./src/assets/images/placeholderproduct.png" className='img-product-page' alt="" />
      <div className="d-md-flex flex-md-column">
        <div className='d-flex justify-content-between align-items-center'>
          <p className=''>Macbook pro</p>
          <div className="price-info d-flex gap-2">
            <p className='old-price'>5000 kr</p>
            <p className='current-price'>3000 kr</p>
          </div>
        </div>
        <p className='fw-bold fs-5'>Description</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore nisi perferendis libero? Eveniet accusamus nihil facilis molestias provident possimus?</p>
        <button className='btn btn-main'>Add to cart</button>
      </div>
    </div>
  )
}

export default Productpage