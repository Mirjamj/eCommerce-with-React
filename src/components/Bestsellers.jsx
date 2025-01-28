import Categories from './Categories'
import Product from './Product'

const Bestsellers = ({ products }) => {

  return (
    <section id="bestsellers" className='my-5'>
      <div className='container d-flex flex-column align-items-center gap-3'>
        <h2>Bestsellers</h2>
        <Categories />
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
            <Product product={product} />
          </div>
        ))}
        <button className='btn btn-main mt-4'>See more products</button>
      </div>
    </section>
  )
}

export default Bestsellers