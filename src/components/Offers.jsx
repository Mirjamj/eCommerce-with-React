import React from 'react'
import Productcard from './Productcard'
import Contentcard from './Contentcard'


const Offers = ({ products }) => {
  const offerIDs = ['658b3c1f5b510998a504475d', '658b3b3e5b510998a5044754']
  const offersToShow = products.filter(product => offerIDs.includes(product._id))

  const leftOffer = offersToShow[0]
  const rightOffer = offersToShow[1]


  return (
    <section id='offers'>
      <div className="container">
        <div className="row">
          <div className='d-flex gap-4 align-items-center justify-content-center py-5 px-md-4 flex-column flex-md-row'>
            {leftOffer && <Productcard product={leftOffer} />}
            <Contentcard />
            {rightOffer && <Productcard product={rightOffer} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers