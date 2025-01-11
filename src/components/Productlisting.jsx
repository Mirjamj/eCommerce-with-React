import React from 'react'
import Product from './Product'

const Productlisting = () => {
  return (
    <div className="row container">
      <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
        <Product />
      </div>
      <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
        <Product />
      </div>
      <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
        <Product />
      </div>
      <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
        <Product />
      </div>
    </div>
  )
}

export default Productlisting