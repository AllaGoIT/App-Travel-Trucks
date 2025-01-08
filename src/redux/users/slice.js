import { createSlice } from "@reduxjs/toolkit";
import { reservation, refresh } from "./operations.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      bookingDate: Date(),
      comment: null,
    },
    token: null,
    isLoading: false,
    isRefreshing: false,
  },
  extraRedusers: (builder) =>
    builder
      .addCase(reservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(reservation.fullfield, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(reservation.rejected, (state) => {
        state.isLoading = false;
        state.token = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
      })

      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const usersReducer = authSlice.reducer;
