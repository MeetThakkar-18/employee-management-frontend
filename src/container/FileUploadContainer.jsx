import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileUpload from '../components/FileUpload';
import { setEmployees } from '../features/employeeSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FileUploadContainer = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const response = await axios.post('http://localhost:5000/api/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.message === 'Employee data imported successfully') {
        const employeesResponse = await axios.get('http://localhost:5000/api/employees');
        dispatch(setEmployees(employeesResponse.data));
        navigate('/employees');
      } else {
        setError('Error importing file: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file: ' + error.message);
    }
  };

  const handleSubmit = () => {
    handleFileUpload();
  };
  
  return (
      <FileUpload onFileChange={handleFileChange} error={error} onSubmit={handleSubmit}/>
  );
};

export default FileUploadContainer;
