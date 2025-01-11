import React from 'react'

import Productlisting from './Productlisting'
import Categories from './Categories'

const Bestsellers = () => {
  return (
    <section id="bestsellers" className='my-5'>
      <div className='container d-flex flex-column align-items-center gap-3'>
        <h2>Bestsellers</h2>
        <Categories />
        <Productlisting />
        <button className='btn btn-main mt-4'>See more products</button>
      </div>
    </section>
  )
}

export default Bestsellers