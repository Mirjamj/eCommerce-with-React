import Herobanner from '../components/Herobanner'
import Bestsellers from '../components/Bestsellers'
import Offers from '../components/Offers'
import Trending from '../components/Trending'
import Subscription from '../components/subscription'

const Home = () => {
  return (
    <div>
      <Herobanner />
      <Bestsellers />
      <Offers />
      <Trending />
      <Subscription />
    </div>
  )
}

export default Home