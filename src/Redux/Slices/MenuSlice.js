// menuSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getMenuItems} from '../../APICalling/APIs';
const initialState = {
  data: null,
  loading: false,
  error: false,
};

export const menuAPI = createAsyncThunk(
  'get/menuItem',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await getMenuItems(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const menuSlice = createSlice({
  name: 'menu',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(menuAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(menuAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(menuAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default menuSlice.reducer;
