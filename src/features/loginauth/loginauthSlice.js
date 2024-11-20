import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await fetch(`${REACT_APP_BASE_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const loginResponse = await response.json();

  localStorage.setItem("tokens", JSON.stringify(loginResponse.tokens));

  return loginResponse;
});

const loginAuthSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    userEmail: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.accessToken = null;
      state.userEmail = null;
      state.isLoggedIn = false;
      localStorage.removeItem("tokens");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.tokens.access;
        state.userEmail = action.payload.tokens.email;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
