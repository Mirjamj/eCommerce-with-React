import React from 'react'
import { Link } from 'react-router'

const Categories = () => {
  return (
    <div>
      <ul className="categories gap-3 d-flex p-0 justify-content-center">
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
    </div>
  )
}

export default Categories