import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: null,
  userId: null,
  expiredTime: null,
  error: null,
  status: "initial",
};

const authenicationSlice = createSlice({
  name: "authenication",
  initialState,
  reducers: {
    checkLogin(state, action) {
      if (new Date(localStorage.getItem("expiredTime")) <= new Date()) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expiredTime");
        state.token = null;
        state.userId = null;
      } else {
        state.token = localStorage.getItem("token");
        state.userId = localStorage.getItem("userId");
      }
    },
    logout(state, action) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      state.token = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuthenicate.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(userAuthenicate.fulfilled, (state, action) => {
      (state.token = action.payload.idToken),
        (state.userId = action.payload.localId);
      state.status = "initial";
      state.error = null;
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("userId", action.payload.localId);
      const expiredTime = new Date(
        new Date().getTime() + action.payload.expiresIn * 1000
      );
      localStorage.setItem("expiredTime", expiredTime);
    });
    builder.addCase(userAuthenicate.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "initial";
    });
  },
});
const API_KEY = "AIzaSyAdxuZ4817ECnVdqfSjW3zbYkmVFCEv9XM";
export const userAuthenicate = createAsyncThunk(
  "authenication/post",
  async ({ email, password, mode }) => {
    const authdata = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    if (mode == "signup") {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            API_KEY,
          authdata
        );
        return response.data;
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        throw new Error(errorMessage);
      }
    } else {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
            API_KEY,
          authdata
        );
        return response.data;
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        throw new Error(errorMessage);
      }
    }
  }
);
export const { checkLogin, logout } = authenicationSlice.actions;
export default authenicationSlice.reducer;
