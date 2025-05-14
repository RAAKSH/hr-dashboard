import { createSlice } from "@reduxjs/toolkit";


const companySlice = createSlice({
  name: 'company',
  initialState: { selectedCompanyId: 1 },
  reducers: {
    setCompanyId: (state, action) => {
      state.selectedCompanyId = action.payload;
    },
  },
});

export const { setCompanyId } = companySlice.actions;
export default companySlice.reducer;
