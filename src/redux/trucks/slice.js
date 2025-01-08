import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const trucksSlice = createSlice({
  name: "truks",
  initialState: {
    items: [],
    filterItem: [],
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
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const trucksReducer = trucksSlice.reducer;
