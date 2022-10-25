import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsApi } from "../api/shopping";

export const getShoppingProducts = createAsyncThunk(
  "products/getShoppingProducts",
  () =>
    // call the imported getProducts function which in turn makes an API call to fetch the data
    getProductsApi()
      .then((response) => response.data)
      .catch((err) => err)
);

const productsSlice = createSlice({
  name: "products",
  // defining the initial state of the global state variables here
  initialState: {
    isFetchingProducts: false, // used to show/hide the loading indicator for product listing async action
    products: [], // expecting this variable to fill up the array once data is fetched from backend
  },
  reducers: {
    // non-async reducers here
  },
  extraReducers: {
    // handling async action creators here in order to mutate the global state data appropriately

    // Used when API is fetching the data from backend
    [getShoppingProducts.pending]: (state) => {
      state.isFetchingProducts = true;
    },

    // Used when API has completed fetching the data from backend
    [getShoppingProducts.fulfilled]: (state, action) => {
      state.isFetchingProducts = false;
      // expecting the products list result in action.payload to mutate the global state variable 'products'
      state.products = action.payload;
    },

    // Used when API has failed to fetch the data from backend and encountered an error
    [getShoppingProducts.rejected]: (state) => {
      state.isFetchingProducts = false;
    },
  },
});

export default productsSlice.reducer;
