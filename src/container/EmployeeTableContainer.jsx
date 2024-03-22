import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import EmployeeTable from '../components/EmployeeTable';
import { selectEmployees, setEmployees } from '../features/employeeSlice';
import { setChartData } from '../features/chartSlice';

const EmployeeTableContainer = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      dispatch(setEmployees(response.data));
      dispatch(setChartData(response.data));
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return <EmployeeTable employees={employees} />;
};

export default EmployeeTableContainer;
