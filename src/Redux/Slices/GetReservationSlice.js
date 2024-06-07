// getReservationSlices.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getReservation} from '../../APICalling/APIs';
const initialState = {
  data: null,
  loading: false,
  error: false,
};

export const getReservationsAPI = createAsyncThunk(
  'get/reservation',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await getReservation(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Define the auth slice
const getReservationSlices = createSlice({
  name: 'menu',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getReservationsAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReservationsAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getReservationsAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Export the reducer and actions
export default getReservationSlices.reducer;
