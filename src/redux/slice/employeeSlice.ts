import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (companyId: number, { rejectWithValue }) => {
    try {    
        const response = await fetch(
          `http://localhost:3000/api/${companyId}/employees`,
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

        console.log("---------",response);
        

        return  response;
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default employeeSlice.reducer;
