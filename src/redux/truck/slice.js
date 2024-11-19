import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckDetail } from "./operations.js";

const truckSlice = createSlice({
  name: "truks",
  initialState: {
    filterItem: [],
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
        state.items.filter((item) => item.id == action.payload.id);
      })
      .addCase(fetchTruckDetail.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const truckReducer = truckSlice.reducer;
