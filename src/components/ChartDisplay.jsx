import React from 'react';
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ChartDisplay = ({ data, title, type, field }) => {
  const ChartComponent = type === 'line' ? LineChart : BarChart;
  const Chart = type === 'line' ? Line : Bar;

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Chart Title : {title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Chart dataKey={field} fill="#8884d8" />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartDisplay;
