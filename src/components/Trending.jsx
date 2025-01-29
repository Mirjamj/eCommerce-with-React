import React from 'react'
import Product from './Product'
import { useRef } from 'react';

const Trending = ({ products }) => {

  const trendingIDs = ['658b33d25b510998a5044748', '658af3e7d711cabe3c94045e', '658b3cd65b510998a5044763', '658b352b5b510998a5044751', '658b33155b510998a504473f', '658af3e7d711cabe3c94045e', '658b3d0d5b510998a5044766', '658b3bc35b510998a504475a']
  const trendingToShow = products.filter(product => trendingIDs.includes(product._id)).sort((a, b) => trendingIDs.indexOf(a._id) - trendingIDs.indexOf(b._id))

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='container py-5'>
      <h4 className='text-center mb-4'>Products trending this week</h4>
      <div className="scroll-container" ref={scrollRef}>
        <div className="scroll-content gap-5">
          {
            trendingToShow.map(product => (
              <div key={product._id}>
                <Product product={product} />
              </div>
            ))
          }
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <button onClick={() => scroll('left')} className="btn btn-chevron me-2">
            <i className='bi bi-chevron-left'></i>
          </button>
        </div>
        <button onClick={() => scroll('right')} className="btn btn-chevron ms-2">
          <i className='bi bi-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Trending