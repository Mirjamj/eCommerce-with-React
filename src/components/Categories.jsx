import React from 'react'
import { Link } from 'react-router'

const Categories = () => {
  return (
    <div>
      <ul className="categories d-flex p-0 justify-content-center mt-4">
        <li>
          <Link className="cat-link p-2" to="#">All</Link>
        </li>/
        <li>
          <Link className="cat-link p-2" to="#">Laptops</Link>
        </li>/
        <li>
          <Link className="cat-link p-2" to="#">Phones</Link>
        </li>/
        <li>
          <Link className="cat-link p-2" to="#">TV</Link>
        </li>/
        <li>
          <Link className="cat-link p-2" to="#">PC</Link>
        </li>
      </ul>
    </div>
  )
}

export default Categories