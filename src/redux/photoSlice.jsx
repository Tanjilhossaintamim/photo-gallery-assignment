import { createSlice } from "@reduxjs/toolkit";

import photos from "../data/photos";

const initialState = {
  photos: [],
  individualPhoto: null,
  status: "initial",
  error: null,
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    load_singel_photo(state, action) {
      state.individualPhoto = action.payload;
    },
    getPhotos(state, action) {
      state.photos = photos;
    },
  },
});

export default photoSlice.reducer;
export const { load_singel_photo, getPhotos } = photoSlice.actions;
