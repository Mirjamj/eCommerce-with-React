import Productlisting from '../components/Productlisting'
import Categories from '../components/Categories'

const Products = () => {
  return (
    <div className="row container mx-auto">
      <Categories />
      <Productlisting />
      <div className="d-flex justify-content-center my-4">
        <button className="btn btn-main">View more products</button>
      </div>
    </div>
  )
}

export default Products