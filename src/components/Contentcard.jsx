import React from 'react'
import { Link } from 'react-router'

const Contentcard = () => {
  return (
    <div className="card d-flex flex-column align-items-center justify-content-center text-center px-2">
      <h3 className='text-uppercase fs-6'>Premium cleaning</h3>
      <p className='text-uppercase fs-4 fw-bold cart-brand'>Happier with a hoover!</p>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, repellendus.</p>
      <Link to='/products' className='btn btn-main'>Shop now</Link>
    </div>
  )
}

export default Contentcard