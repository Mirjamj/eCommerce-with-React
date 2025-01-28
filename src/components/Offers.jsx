import React from 'react'
import Productcard from './Productcard'
import Contentcard from './Contentcard'


const Offers = ({ products }) => {
  const offers = products.filter(product => product.category === 'offer')

  return (
    <section id='offers'>
      <div className="container">
        <div className="row">
          <div className='d-flex gap-4 align-items-center justify-content-center py-5 px-md-4 flex-column flex-md-row'>
            {offers.map(offer => (
              <Productcard key={offer._id} product={offer} />
            ))}
            <Contentcard />
            <Productcard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers