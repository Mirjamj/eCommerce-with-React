import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '../store/features/products/ShoppingCart/shoppingCartSlice'

// Function to format the price using Swedish currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('sv-SE').format(price);
}

const Productpage = () => {

  // Extract product_id from the route parameters using useParams hook
  const { product_id } = useParams()

  // Component state hooks
  const [product, setProduct] = useState(null) // Store the fetched product details
  const [error, setError] = useState(null) // Store any errors from the fetch operation
  const [loading, setLoading] = useState(false) // Track loading state during API call

  const [isExpanded, setIsExpanded] = useState(false) // Track if the product description is expanded or not
  const maxChars = 200 // Define the maximum number of characters to display in the description before truncating

  // Toggle the expanded state of the product description (to show more or less)
  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  const dispatch = useDispatch() // Dispatch function to interact with Redux

  // useEffect hook to fetch product data when the component is mounted or product_id changes
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true) // Start loading before the API request

      try {
        // Make an API request to fetch the product details using the product_id
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/${product_id}`)

        setProduct(res.data) // Set the fetched product details to state
      } catch (error) {
        setError('Something went wrong....') // Set an error message if the fetch fails
        console.log(error.message);
      } finally {
        setLoading(false) // Set loading to false after the API request is complete (whether successful or not)
      }
    }

    getProducts() // Call the function to fetch the product data
  }, [product_id]) // Dependency array, the effect will rerun if product_id changes

  // Handle adding the product to the shopping cart by dispatching the addToCart action
  const handleClick = () => {
    dispatch(addToCart(product)) // Dispatch addToCart action with the selected product
  }

  // Return the error message UI if there's an error fetching the product
  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  // Return a loading spinner while the product data is being fetched
  if (loading) {
    return (
      <div className='container d-flex justify-content-center my-5'>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  // Return the product details UI if the data is successfully fetched
  return (
    <div className='container d-md-flex my-4 justify-content-md-evenly'>
      <img src={product?.images?.[0]} className='img-product-page d-flex m-auto' alt={product?.name} />
      <div className="d-md-flex flex-md-column mx-md-3 col-md-5">
        <div className='d-flex justify-content-between align-items-center mt-2 mt-md-0 d-md-block'>
          <h1 className='fs-4'>{product?.name}</h1>
          <div className="price-info d-flex gap-2">
            <p className='current-price fw-bold'>{formatPrice(product?.price)} kr</p>
          </div>
        </div>
        <p className='fs-6 d-inline'>
          {/*Conditionally render the product description (shortened or full)*/}
          {
            isExpanded
              ? product?.description
              : product?.description?.slice(0, maxChars) + (product?.description?.length > maxChars ? '...' : '')
          }
          {product?.description?.length > maxChars && (
            <button onClick={toggleDescription} className="btn btn-link p-0 ms-1 align-baseline">
              {/*Show the "View more" or "View less" button if the description is longer than the maxChars*/}
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