import React from 'react'
import Productcard from '../products/Productcard'
import Contentcard from './Contentcard'


const Offers = ({ products }) => {

  // Define an array of offer product IDs
  const offerIDs = ['658b3c1f5b510998a504475d', '658b3b3e5b510998a5044754']

  // Filter the products array to find products with the matching offer IDs
  const offersToShow = products.filter(product => offerIDs.includes(product._id))

  // Extract the first and second offers from the filtered array
  const leftOffer = offersToShow[0]
  const rightOffer = offersToShow[1]


  return (
    <section id='offers'>
      <div className="container">
        <div className="row">
          <div className='d-flex gap-4 align-items-center justify-content-center py-5 px-md-4 flex-column flex-md-row'>
            {/*Check if the left offer exists, and render Productcard component with the left offer data*/}
            {leftOffer && <Productcard product={leftOffer} />}
            <Contentcard />
            {/*Check if the right offer exists, and render Productcard component with the right offer data*/}
            {rightOffer && <Productcard product={rightOffer} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers