import React, { useState } from 'react';
import { Modal, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ModalChart = ({ open, onClose, onGenerateChart }) => {
  const [chartTitle, setChartTitle] = useState('');
  const [chartType, setChartType] = useState('');
  const [selectedField, setSelectedField] = useState('');

  const handleGenerateChart = () => {
    if (chartTitle && chartType && selectedField) {
      onGenerateChart(chartTitle, chartType, selectedField);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', borderRadius: '5px', zIndex: '999' }}>
        <TextField label="Chart Title" value={chartTitle} onChange={(e) => setChartTitle(e.target.value)} style={{ marginBottom: '20px', width: '100%' }} />
        <FormControl style={{ marginBottom: '20px', width: '100%' }}>
          <InputLabel style={{marginTop:'7px'}}>Chart Type</InputLabel>
          <Select value={chartType} onChange={(e) => setChartType(e.target.value)} fullWidth>
            <MenuItem value="bar">Bar Chart</MenuItem>
            <MenuItem value="line">Line Chart</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ marginBottom: '20px', width: '100%' }}>
          <InputLabel style={{marginTop:'7px'}}>Select Field</InputLabel>
          <Select value={selectedField} onChange={(e) => setSelectedField(e.target.value)} fullWidth>
            <MenuItem value="location">Location</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleGenerateChart} variant="contained" color="primary" fullWidth>Generate Chart</Button>
      </div>
    </Modal>
  );
};

export default ModalChart;
