import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TableRow, TableCell, TextField, Button } from "@mui/material";
import { updateEmployee, deleteEmployee } from "../features/employeeSlice";
import axios from "axios";

const EmployeeRow = ({ employee }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({ ...employee });

  const handleSave = async () => {
    setEditMode(false);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/employee/${employee.id}`,
        editedData
      );
      dispatch(updateEmployee(response.data));
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleInputChange = (field, value) => {
    const parsedValue = field === "salary" ? parseInt(value, 10) : value;
    setEditedData({ ...editedData, [field]: parsedValue });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/employee/${employee.id}`);
      dispatch(deleteEmployee(employee.id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <TableRow key={employee.id}>
      <TableCell>{employee.employeeID}</TableCell>
      <TableCell>
        {editMode ? (
          <TextField
            value={editedData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        ) : (
          employee.name
        )}
      </TableCell>
      <TableCell>
        {editMode ? (
          <TextField
            value={editedData.salary}
            onChange={(e) => handleInputChange("salary", e.target.value)}
          />
        ) : (
          employee.salary
        )}
      </TableCell>
      <TableCell>
        {editMode ? (
          <TextField
            value={editedData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        ) : (
          employee.location
        )}
      </TableCell>
      <TableCell>
        {editMode ? (
          <TextField
            value={editedData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
          />
        ) : (
          employee.status
        )}
      </TableCell>
      <TableCell>
        {editMode ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <>
            <Button onClick={() => setEditMode(true)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default EmployeeRow;
