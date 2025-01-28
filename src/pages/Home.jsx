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

  const bestsellers = products.filter(product => product.category === 'bestseller')
  const offers = products.filter(product => product.category === 'offer')
  const trending = products.filter(product => product.category === 'trending')



  return (
    <div>
      <Herobanner />
      <Bestsellers products={bestsellers} />
      <Offers products={offers} />
      <Trending products={trending} />
      <Subscription />
    </div>
  )
}

export default Home