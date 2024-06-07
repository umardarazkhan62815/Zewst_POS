// getOrderSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCustomers} from '../../APICalling/APIs';
const initialState = {
  data: null,
  loading: false,
  error: false,
};

export const getCustomersAPI = createAsyncThunk(
  'get/customers',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await getCustomers(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const getCustomerSlice = createSlice({
  name: 'customers',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCustomersAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomersAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getCustomersAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default getCustomerSlice.reducer;
