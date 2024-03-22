import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/employeeSlice';
import chartReducer from './features/chartSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    chart: chartReducer,
  },
});

export default store;
