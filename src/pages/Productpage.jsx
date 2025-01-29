import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '../store/features/products/ShoppingCart/shoppingCartSlice'

const Productpage = () => {

  const { product_id } = useParams()

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [isExpanded, setIsExpanded] = useState(false)
  const maxChars = 200

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)

      try {
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${product_id}`)
        setProduct(res.data)
      } catch (error) {
        setError('Something went wrong....')
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [product_id])

  const handleClick = () => {
    dispatch(addToCart(product))
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='container d-flex justify-content-center my-5'>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className='container d-lg-flex my-4'>
      <img src={product?.images?.[0]} className='img-product-page' alt={product?.name} />
      <div className="d-md-flex flex-md-column mx-md-3">
        <div className='d-flex justify-content-between align-items-center mt-2 mt-md-0 d-md-block'>
          <h1 className='fs-4'>{product?.name}</h1>
          <div className="price-info d-flex gap-2">
            <p className='current-price fw-bold'>{product?.price} kr</p>
          </div>
        </div>
        <p className='fs-6 d-inline'>
          {
            isExpanded
              ? product?.description
              : product?.description?.slice(0, maxChars) + (product?.description?.length > maxChars ? '...' : '')
          }
          {product?.description?.length > maxChars && (
            <button onClick={toggleDescription} className="btn btn-link p-0 ms-1 align-baseline">
              {
                isExpanded
                  ? 'View less'
                  : 'View more'
              }
              <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} ms-1`}></i>
            </button>
          )}
        </p>
        <button onClick={handleClick} className='btn btn-main mt-md-4 w-100'>Add to cart</button>
      </div>
    </div>
  )
}

export default Productpage