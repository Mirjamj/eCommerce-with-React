import Productlisting from '../components/Productlisting'
import Categories from '../components/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../store/features/products/productsSlice'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('dispatching getProducts');
    dispatch(getProducts())
  }, [])

  const { products, error, loading } = useSelector(state => state.productList)

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="row container mx-auto">
      <Categories />
      {
        loading
          ? <Productlisting.Skeleton />
          : <Productlisting products={products} />
      }
      <div className="d-flex justify-content-center my-4">
        <button className="btn btn-main">View more products</button>
      </div>
    </div>
  )
}

export default Products