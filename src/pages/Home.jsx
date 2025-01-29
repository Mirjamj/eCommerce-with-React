import Herobanner from '../components/Herobanner'
import Bestsellers from '../components/Bestsellers'
import Offers from '../components/Offers'
import Trending from '../components/Trending'
import Subscription from '../components/subscription'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../store/features/products/productsSlice'


const Home = () => {
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