import React from 'react'
import Productcard from './Productcard'
import Contentcard from './Contentcard'

const Offers = () => {
  return (
    <section id='offers'>
      <div className="container">
        <div className="row">
          <div className='d-flex gap-4 align-items-center justify-content-center py-5 px-md-4 flex-column flex-md-row'>
            <Productcard />
            <Contentcard />
            <Productcard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers