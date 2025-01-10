import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='text-center my-5'>
      <h1>404 - Page not found</h1>
      <Link className="btn btn-main mt-4" to='/'>Back to home</Link>
    </div>
  )
}

export default NotFound