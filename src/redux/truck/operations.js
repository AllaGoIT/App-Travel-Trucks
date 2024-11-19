import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL =
  "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/:id";

export const fetchTruckDetail = createAsyncThunk(
  "truck/details",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
