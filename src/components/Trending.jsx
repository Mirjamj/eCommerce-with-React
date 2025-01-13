import React from 'react'
import Product from './Product'
import { useRef } from 'react';

const Trending = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behvior: 'smooth'
      })
    }
  }

  return (
    <div className='container py-5'>
      <h4 className='text-center mb-4'>Products trending this week</h4>

      <div className="overflow-auto" style={{ display: 'flex', gap: '1rem', scrollSnapType: 'x mandatory' }} ref={scrollRef}>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3" style={{ scrollSnapAlign: 'start' }}>
          <Product />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <button className="btn btn-chevron me-2" onClick={() => scroll('left')}>
            <i className='bi bi-chevron-left'></i>
          </button>
        </div>
        <button className="btn btn-chevron ms-2" onClick={() => scroll('right')}>
          <i className='bi bi-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Trending