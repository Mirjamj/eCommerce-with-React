import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import shoppingCartSlice from "./features/products/ShoppingCart/shoppingCartSlice";

// Configuring the Redux store
export const store = configureStore({
  // Reducers are combined under `reducer` to manage different slices of the state
  reducer: {
    // The productList state is managed by the productsSlice reducer
    productList: productsSlice,
    // The shoppingCart state is managed by the shoppingCartSlice reducer
    shoppingCart: shoppingCartSlice
  },

})
