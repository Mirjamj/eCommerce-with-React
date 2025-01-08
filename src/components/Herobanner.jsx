import React from 'react'

const Herobanner = () => {
  return (
    <section id="heroBanner" className="d-flex justify-content-center">
      <div className='d-flex align-items-center px-md-3 gap-2'>
      <div className="text-center text-md-start col-md-6">
        <p className="text-uppercase">Our winter sale is finally here!</p>
        <h1 className="fw-bold">Up to 70% off on all items</h1>
        <button className="btn btn-main mt-4">Shop now</button>
      </div>
      <div className="hero-img-wrapper d-none d-md-block col-md-6">
        <img src="/src/assets/images/sale.avif" className="img-hero" alt="Image of a window with sale sign" />
      </div>
      </div>
    </section>
  )
}

export default Herobanner