import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//calling the BE api
export const fetchAnnouncementData = createAsyncThunk(
  "annoucement/fetchAnnouncement",
  async (companyId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/${companyId}/announcements`,
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

const announcementSlice = createSlice({
  name: "annoucement",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {   // extra reducers to handle the status of the api call
    builder
      .addCase(fetchAnnouncementData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnnouncementData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnnouncementData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default announcementSlice.reducer;
