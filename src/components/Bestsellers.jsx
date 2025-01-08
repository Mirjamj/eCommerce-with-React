import React from 'react'
import { Link } from 'react-router'
import Product from './Product'

const Bestsellers = () => {
  return (
      <section id="bestsellers" className='my-5'>
      <div className='container d-flex flex-column align-items-center gap-3'>
      <h2>Bestsellers</h2>
        <ul className="categories-start gap-3 d-flex">
          <li>
            <Link className="cat-link" to="#">All</Link>
          </li>/
          <li>
            <Link className="cat-link" to="#">Laptops</Link>
          </li>/
          <li>
            <Link className="cat-link" to="#">Phones</Link>
          </li>/
          <li>
            <Link className="cat-link" to="#">TV</Link>
          </li>/
          <li>
            <Link className="cat-link" to="#">PC</Link>
          </li>
        </ul>
        <div className="row">
        <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
          <Product />
        </div>
        <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
          <Product />
        </div>
        <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
          <Product />
        </div>
        <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex flex-column'>
          <Product />
        </div>
        </div>
        <button className='btn btn-main mt-4'>See more products</button>
      </div>
    </section>
  )
}

export default Bestsellers