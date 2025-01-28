import Product from './Product'

const Productlisting = ({ products }) => {
  return (
    <div className="container">
      <div className='row'>
        {
          products.map(product => (
            <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mobile-listing">
              <Product product={product} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

Productlisting.Skeleton = () => {
  return (
    <div className="row container">
      <div className='g-4 col-6 col-md-4 col-lg-3 product d-flex'>
        <Product />
      </div>
    </div>
  )
}


export default Productlisting