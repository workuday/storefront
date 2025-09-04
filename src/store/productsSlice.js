import { createSlice } from "@reduxjs/toolkit";
import {productsData} from "../productsData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: productsData,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
