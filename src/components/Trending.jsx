import React from 'react'
import Product from './Product'

const Trending = () => {
  return (
    <div className='container py-5'>
      <h4 className='text-center mb-4'>Products trending this week</h4>
      <div className="d-flex align-items-center justify-content-center row">
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Trending