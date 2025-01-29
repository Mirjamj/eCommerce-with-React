import React from 'react'
import Product from './Product'

const Productcard = ({ product }) => {
  return (
    <div className='card d-flex align-item-center justify-content-center'>
      <Product product={product} />
    </div>
  )
}

export default Productcard