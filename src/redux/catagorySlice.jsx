import { createSlice } from "@reduxjs/toolkit";
import catagories from "../data/catatories";

const initialState = {
  catagories: [],
  error: null,
};

const catagorySlice = createSlice({
  name: "catagory",
  initialState,
  reducers: {
    fetchCatagory(state, action) {
      state.catagories = catagories;
    },
    catagoryFetchError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { fetchCatagory,catagoryFetchError } = catagorySlice.actions;

export default catagorySlice.reducer;
