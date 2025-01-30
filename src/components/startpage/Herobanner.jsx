import React from 'react'
import { Link } from 'react-router'

const Herobanner = () => {
  return (
    <section id="heroBanner" className="d-flex justify-content-center">
      <div className='d-flex align-items-center px-md-3 justify-content-between container'>
        <div className="text-center text-md-start col-md-5">
          <h1 className="fw-bold">It's finally here, Apple Iphone 15 Pro!</h1>
          <p className='mt-3'>Selling out fast, so make sure to secure your new Iphone 15 Pro with us today.</p>
          <Link to={`/products/658b33d25b510998a5044748`} className="btn btn-main mt-4">Shop now</Link>
        </div>
        <div className="col-md-6">
          <img src='/src/assets/images/iphone15.avif' className="d-none d-md-block" alt="A photo of an Iphone 15 pro" />
        </div>
      </div>
    </section >
  )
}

export default Herobanner