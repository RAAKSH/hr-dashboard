import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//calling the BE api
export const fetchLeaves = createAsyncThunk(
  "leaves/fetchLeaves",
  async (companyId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/${companyId}/leaves`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const leavesSlice = createSlice({
  name: "leaves",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {   // extra reducers to handle the status of the api call
    builder
      .addCase(fetchLeaves.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLeaves.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default leavesSlice.reducer;
