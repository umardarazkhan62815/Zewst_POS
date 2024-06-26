// loginSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi} from '../../APICalling/APIs';

const initialState = {
  user: null,
  loading: false,
  error: false,
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await loginApi(credentials); //login API function
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const loginSlice = createSlice({
  name: 'login',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default loginSlice.reducer;
