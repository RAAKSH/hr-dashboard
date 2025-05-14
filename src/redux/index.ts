import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slice/companySlice.ts';
import employeeReducer from "./slice/employeeSlice.ts"

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;