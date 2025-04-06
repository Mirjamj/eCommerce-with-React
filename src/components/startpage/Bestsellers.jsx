import { Link } from 'react-router'
import Categories from '../default/Categories'
import Product from '../products/Product'

const Bestsellers = ({ products }) => {

  // Define an array of best-seller product IDs
  const bestsellerIDs = ['67ebdd2fedc5c8d7b79fba36', '67e68417478b6f48b92926be', '67ebdd26edc5c8d7b79fba34', '67ebdcfeedc5c8d7b79fba2e']

  // Filter the products array to include only the products that match the best-seller IDs,
  // and sort the products based on the order of the bestsellerIDs array.
  const bestSellerToShow = products.filter(product => bestsellerIDs.includes(product._id)).sort((a, b) => bestsellerIDs.indexOf(a._id) - bestsellerIDs.indexOf(b._id))

  return (
    <section id="bestsellers" className='my-5'>
      <div className='container d-flex flex-column align-items-center gap-3'>
        <h2 className='mt-5'>Bestsellers</h2>
        <Categories />
        <div className="scroll-container">
          <div className="scroll-content">
            {
              // Map through the filtered and sorted best-sellers array and render the Product component for each one
              bestSellerToShow.slice(0, 4).map(product => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))
            }
          </div>
        </div>
        <Link to='/products' className='btn btn-main mt-4'>See more products</Link>
      </div>
    </section>
  )
}

export default Bestsellers