// getEmployeeSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getEmployees} from '../../APICalling/APIs';
const initialState = {
  data: null,
  loading: false,
  error: false,
};

export const getEmployeeAPI = createAsyncThunk(
  'get/employee',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await getEmployees(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const getEmployeeSlice = createSlice({
  name: 'employee',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getEmployeeAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployeeAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getEmployeeAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default getEmployeeSlice.reducer;
