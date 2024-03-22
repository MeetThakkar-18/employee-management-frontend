import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    chartData: [],
  },
  reducers: {
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const { setChartData } = chartSlice.actions;

export const selectChartData = state => state.chart.chartData;

export default chartSlice.reducer;
