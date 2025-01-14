import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckDetail } from "./operations.js";

const truckSlice = createSlice({
  name: "truck",
  initialState: {
    filterTruck: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchTruckDetail.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTruckDetail.fullfield, (state, action) => {
        state.loading = false;
        state.filterTruck.push(action.payload);
      })
      .addCase(fetchTruckDetail.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const truckReducer = truckSlice.reducer;
