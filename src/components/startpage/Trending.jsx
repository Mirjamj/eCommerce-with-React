import React from 'react'
import Product from '../products/Product';
import { useRef } from 'react';

const Trending = ({ products }) => {

  // Define an array of trending product IDs that we want to display
  const trendingIDs = ['67ebdd2fedc5c8d7b79fba36', '67ebdd38edc5c8d7b79fba38', '67ebdd40edc5c8d7b79fba3a', '67e68417478b6f48b92926be', '67ebdd26edc5c8d7b79fba34', '67ebdd49edc5c8d7b79fba3c', '67ebdd51edc5c8d7b79fba3e', '67ebdd5cedc5c8d7b79fba40']

  // Filter the products array to show only the products that match the trending IDs
  // Also sort the products according to their appearance in the trendingIDs array
  const trendingToShow = products.filter(product => trendingIDs.includes(product._id)).sort((a, b) => trendingIDs.indexOf(a._id) - trendingIDs.indexOf(b._id))

  // Use the useRef hook to reference the scroll container for smooth scrolling
  const scrollRef = useRef(null);

  // Function to scroll the product list horizontally
  // Takes a direction ('left' or 'right') and scrolls by 300px
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
          {/* Map through the filtered and sorted trending products and display them using the Product component */}
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