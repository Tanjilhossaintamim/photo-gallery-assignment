import { configureStore } from "@reduxjs/toolkit";
import catagorySlice from "./catagorySlice";
import photoSlice from "./photoSlice";
import commentSlice from "./commentSlice";
import authenicationSlice from "./authenicationSlice";

const store = configureStore({
  reducer: {
    catagory: catagorySlice,
    photos: photoSlice,
    comments: commentSlice,
    authenication: authenicationSlice,
  },
});

export default store;
