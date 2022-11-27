import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    loading: false,
    error: false,
    categories: null,
  },
  reducers: {
    getStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },

    getFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getStart, getFail, getSuccess } = stockSlice.actions;
export default stockSlice.reducer;
