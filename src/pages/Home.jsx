import Herobanner from '../components/startpage/Herobanner'
import Bestsellers from '../components/startpage/Bestsellers'
import Offers from '../components/startpage/Offers'
import Trending from '../components/startpage/Trending'
import Subscription from '../components/startpage/Subscription'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../store/features/products/productsSlice'



const Home = () => {

  // Create a reference to the Redux dispatch function
  const dispatch = useDispatch()

  // Use useEffect hook to dispatch the action to get products on component mount
  useEffect(() => {
    console.log('dispatching getProducts');
    dispatch(getProducts()) // Dispatch the action to fetch products when the component mounts
  }, []) // Empty dependency array ensures this effect runs only once on mount

  // Access the products, error, and loading states from the Redux store
  const { products, error, loading } = useSelector(state => state.productList)

  // Display an error message if there is an error in fetching products
  if (error) {
    return (
      <div>
        <p className='text-red text-center my-3'>{error}</p>
      </div>
    )
  }

  // Return the main homepage layout if no error
  return (
    <div>
      <Herobanner />
      <Bestsellers products={products} />
      <Offers products={products} />
      <Trending products={products} />
      <Subscription />
    </div>
  )
}

export default Home