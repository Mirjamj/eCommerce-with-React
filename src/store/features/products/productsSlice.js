import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productService from './productService'

// Initial state of the product slice. Contains an empty array for products, 
// null for errors, and false for loading state.
const initialState = {
  products: [],
  error: null,
  loading: false
}

// Creating an async thunk to fetch all products
// It calls the `getAll` method from the `productService`, and handles success or failure
export const getProducts = createAsyncThunk('product-list/getAll', async (_, thunkAPI) => {
  try {
    // Calling productService to get the products data from the API
    return await productService.getAll()
  } catch (error) {
    // If an error occurs, rejecting with the error message
    return thunkAPI.rejectWithValue(error.message)
  }
})

// Defining the productSlice using Redux Toolkit's createSlice
export const productsSlice = createSlice({
  name: 'product-list',
  initialState,
  reducers: {},

  // Handling additional cases for the async thunk (extraReducers)
  extraReducers: (builder) => {
    builder
      // Handling the `pending` state when the async request is in progress
      .addCase(getProducts.pending, state => {
        state.loading = true // Set loading to true when the async operation starts
      })
      // Handling the `rejected` state when the async request fails
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false // Set loading to false since the request has finished
        state.error = action.payload // Store the error message
      })
      // Handling the `fulfilled` state when the async request is successful
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false // Set loading to false since the request has finished
        state.error = null // Clear any previous errors
        state.products = action.payload // Store the fetched products in state
      })
  }
})

export default productsSlice.reducer