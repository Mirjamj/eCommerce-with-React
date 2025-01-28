import React from 'react'
import Product from './Product'

const Productcard = ({ product }) => {
  return (
    <div className='card'>
      <Product product={product} />
    </div>
  )
}

export default Productcard