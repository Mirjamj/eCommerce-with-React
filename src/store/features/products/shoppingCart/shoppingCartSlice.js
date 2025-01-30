import { createSlice } from "@reduxjs/toolkit"

// Initial state for the shopping cart, including the cart array and total values
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
}

// Helper function to calculate the total price of items in the cart
// Iterates through all cart items and adds up their price * quantity
const getTotalPrice = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.product.price * item.quantity
  })
  return total
}

// Helper function to calculate the total quantity of items in the cart
// Adds up the quantity of each cart item
const getTotalQuantiy = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

// Create a slice to manage the shopping cart state using Redux Toolkit's createSlice
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    // Action to add a product to the cart
    addToCart: (state, action) => {
      // Check if the product already exists in the cart
      const item = state.cart.find(cartItem => cartItem.product._id === action.payload._id)

      // If the product exists, increase the quantity by 1
      // Otherwise, add the product with an initial quantity of 1
      item
        ? item.quantity++
        : state.cart = [...state.cart, { product: action.payload, quantity: 1 }]

      // Update the total price and total quantity after modifying the cart
      state.totalPrice = getTotalPrice(state.cart)
      state.totalQuantity = getTotalQuantiy(state.cart)
    },

    // Action to remove one unit of a product from the cart
    removeOne: (state, action) => {
      // Find the product by its unique identifier (_id)
      const item = state.cart.find(cartItem => cartItem.product._id === action.payload)

      // If the quantity is greater than 1, decrease it by 1
      // If the quantity is 1, remove the item from the cart entirely
      item.quantity <= 1
        ? state.cart = state.cart.filter(item => item.product._id !== action.payload)
        : item.quantity--

      // Recalculate total price and total quantity after removal
      state.totalPrice = getTotalPrice(state.cart)
      state.totalQuantity = getTotalQuantiy(state.cart)
    },

    // Action to completely remove a product from the cart
    removeItem: (state, action) => {
      // Remove the product with the specified _id from the cart
      state.cart = state.cart.filter(item => item.product._id !== action.payload)

      // Recalculate the total price and total quantity after removal
      state.totalPrice = getTotalPrice(state.cart)
      state.totalQuantity = getTotalQuantiy(state.cart)
    },
    clearCart: (state) => {
      // Action to clear all items from the cart
      state.cart = []

      state.totalPrice = getTotalPrice(state.cart)
      state.totalQuantity = getTotalQuantiy(state.cart)
    },
  }
})

export const { addToCart, removeOne, removeItem, clearCart } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer