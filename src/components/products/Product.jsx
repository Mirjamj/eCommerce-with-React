import { Link } from 'react-router'
import { addToCart } from '../../store/features/products/ShoppingCart/shoppingCartSlice'
import { useDispatch } from 'react-redux'

const Product = ({ product = {} }) => {
  const dispatch = useDispatch() // Creating a dispatch function to interact with Redux

  // Function to handle adding the product to the cart
  const handleClick = (e) => {
    e.stopPropagation() // Prevents event bubbling
    dispatch(addToCart(product)) // Dispatching addToCart action with the product
  }

  return (
    <div className='product-card'>
      <Link to={`/products/${product._id}`}>
        <img src={product.images?.[0]} className='img-card' alt={product.name} />
        <p className='ps-2 pt-2 text-truncate'>{product.name}</p>
      </Link>
      <div className='d-flex justify-content-between ps-2'>
        <p className='current-price'>{product.price} kr</p>
        <button onClick={handleClick} className='pe-2 bg-transparent border-0'>
          <i className="fa-solid fa-cart-plus pe-2"></i>
        </button>
      </div>
    </div>
  )
}

export default Product