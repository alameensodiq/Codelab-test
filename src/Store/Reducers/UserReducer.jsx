import { createSlice } from '@reduxjs/toolkit';
import { Users } from '../Api/Users';

export const userReducerSlice = createSlice({
  name: 'users',
  initialState: {
    users: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.users = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticating = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Users.fulfilled, (state, action) => {
      state.users = action.payload;
      state.authenticated = false;
      state.authenticating = false;
    });
    builder.addCase(Users.pending, (state, action) => {
      state.authenticating = true;
      state.authenticated = true;
    });
    builder.addCase(Users.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticating = false;
      state.isError = true;
    });
  },
});

export const { clearState } = userReducerSlice.actions;

export const userReducer = userReducerSlice.reducer;
export const userReducerSelector = (state) => state.users;
