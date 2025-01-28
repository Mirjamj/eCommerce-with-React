import { Link } from 'react-router'

const Product = ({ product = {} }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className='product-card'>
        <img src={product.images?.[0]} className='img-card' alt={product.name} />
        <p className='ps-2 pt-2 text-truncate'>{product.name}</p>
        <div className='d-flex justify-content-between ps-2'>
          <div className="price-info d-flex gap-2">
            <p className='current-price'>{product.price} kr</p>
          </div>
          <span className='pe-2'>
            <i className="fa-solid fa-cart-plus pe-2"></i>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Product