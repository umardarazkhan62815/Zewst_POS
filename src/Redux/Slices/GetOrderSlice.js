// getOrderSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getOrders} from '../../APICalling/APIs';
const initialState = {
  data: null,
  loading: false,
  error: false,
};

export const getOrdersAPI = createAsyncThunk(
  'get/orders',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await getOrders(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const getOrderSlice = createSlice({
  name: 'menu',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getOrdersAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrdersAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getOrdersAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default getOrderSlice.reducer;
