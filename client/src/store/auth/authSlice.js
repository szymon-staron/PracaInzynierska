import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserFromLocalStorage: (state) => {
      const user = localStorage.getItem("authDetails");

      if (user) {
        state.user = JSON.parse(user);
        state.isAuthenticated = true;
      }
    },
    userLoading: (state) => {
      state.loading = true;
    },
    userLoaded: (state, action) => {
      const serializedState = JSON.stringify(action.payload);
      localStorage.setItem("authDetails", serializedState);
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    logOut: (state) => {
      state.user = {};
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  logOut,
  userLoading,
  setToken,
  loginRequest,
  loginSuccess,
  userLoaded,
  getUserFromLocalStorage,
} = authSlice.actions;

export default authSlice.reducer;
