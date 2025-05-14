import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slice/companySlice.ts";
import employeeReducer from "./slice/employeeSlice.ts";
import leaveReducer from "./slice/leaveSlice.ts";
import announcementReducer from "./slice/annoucementSlice.ts";
import authReducer from "./slice/authSlice.ts";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    company: companyReducer,  
    leaves: leaveReducer,
    announcement: announcementReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
