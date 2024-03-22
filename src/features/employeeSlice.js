import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export const selectEmployees = state => state.employee.employees;

export default employeeSlice.reducer;
