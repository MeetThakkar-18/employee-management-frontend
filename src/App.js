
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeTableContainer from './container/EmployeeTableContainer';
import FileUploadContainer from './container/FileUploadContainer';
import ChartDisplayContainer from './container/ChartDisplayContainer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadContainer />} />
        <Route path="/employees" element={
            <React.Fragment>
              <EmployeeTableContainer />
              <ChartDisplayContainer />
            </React.Fragment>
          } />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
