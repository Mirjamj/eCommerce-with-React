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
    <div className='container d-flex justify-content-center my-5'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}


export default Productlisting