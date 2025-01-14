import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    trucks: [],
    filterTrucks: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTrucks.fullfield, (state, action) => {
        state.trucks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const trucksReducer = trucksSlice.reducer;
