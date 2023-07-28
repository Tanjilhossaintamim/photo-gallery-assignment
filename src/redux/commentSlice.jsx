import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  commentError: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    add_comment(state, action) {
      console.log(action.payload);
    },
    comment_error(state, action) {
      state.commentError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentSlice.reducer;
export const { add_comment, comment_error } = commentSlice.actions;

export const fetchComments = createAsyncThunk("comment/get", async () => {
  const response = await axios.get(
    "https://photo-gallery-416c5-default-rtdb.firebaseio.com/feedback.json"
  );
  const result = await response.data;
  return result;
});
