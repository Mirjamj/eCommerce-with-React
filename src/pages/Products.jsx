import Categories from '../components/default/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../store/features/products/productsSlice'
import Productlisting from '../components/products/Productlisting'

const Products = () => {

  // Initialize dispatch to trigger actions in Redux
  const dispatch = useDispatch()

  // useEffect hook to dispatch the 'getProducts' action when the component mounts
  useEffect(() => {
    console.log('dispatching getProducts');
    dispatch(getProducts()) // Dispatch the action to fetch products
  }, []) // Empty dependency array means this effect will only run once, when the component mounts

  // Extract the products, error, and loading states from the Redux store using useSelector
  const { products, error, loading } = useSelector(state => state.productList)

  // Display error message if there is an error in fetching products
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
        loading // If loading is true, show the Skeleton loading component
          ? <Productlisting.Skeleton />
          : <Productlisting products={products} /> // Otherwise, render the list of products
      }
      <div className="d-flex justify-content-center my-4">
        <button className="btn btn-main">View more products</button>
      </div>
    </div>
  )
}

export default Products