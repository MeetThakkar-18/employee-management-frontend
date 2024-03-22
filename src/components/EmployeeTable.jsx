import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addEmployee,
} from "../features/employeeSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { setChartData } from "../features/chartSlice";
import EmployeeRow from "./EmployeeRow";

const TableContainerStyled = styled(TableContainer)({
  maxHeight: 400,
  overflowY: "auto",
});

const HeaderTableCell = styled(TableCell)({
  color: "#ffffff",
  backgroundColor: "#1976d2",
  fontSize: "15px", 
  fontWeight: "bold",
});

const DataTableCell = styled(TableCell)({
  fontSize: "14px !important",
});


const DataRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f2f2f2", 
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#ffffff",
  },
});

const EmployeeTable = ({ employees }) => {
  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = useState({
    employeeID: "",
    name: "",
    salary: "",
    location: "",
    status: "",
  });

  const handleAddEmployee = async () => {
    if (!newEmployee.employeeID) {
      console.error("Error: Employee ID is required.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/add-employee",
        newEmployee
      );
      dispatch(addEmployee(response.data));
      setNewEmployee({
        employeeID: "",
        name: "",
        salary: "",
        location: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  useEffect(() => {
    updateChartData();
  }, [employees]);

  const updateChartData = () => {
    dispatch(setChartData(employees));
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Employee Details
      </Typography>
      <Typography style={{fontSize:'12px'}} variant="h6" align="end" gutterBottom>
        Note : Scroll down bottom of table to add new records
      </Typography>
      <TableContainerStyled component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <HeaderTableCell>Employee ID</HeaderTableCell>
              <HeaderTableCell>Name</HeaderTableCell>
              <HeaderTableCell>Salary</HeaderTableCell>
              <HeaderTableCell>Location</HeaderTableCell>
              <HeaderTableCell>Status</HeaderTableCell>
              <HeaderTableCell>Action</HeaderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
            <DataRow>
              <DataTableCell>
                <TextField
                  value={newEmployee.employeeID}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      employeeID: e.target.value,
                    })
                  }
                />
              </DataTableCell>
              <DataTableCell>
                <TextField
                  value={newEmployee.name}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                />
              </DataTableCell>
              <DataTableCell>
                <TextField
                  value={newEmployee.salary}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      salary: parseInt(e.target.value),
                    })
                  }
                />
              </DataTableCell>
              <DataTableCell>
                <TextField
                  value={newEmployee.location}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, location: e.target.value })
                  }
                />
              </DataTableCell>
              <DataTableCell>
                <TextField
                  value={newEmployee.status}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, status: e.target.value })
                  }
                />
              </DataTableCell>
              <DataTableCell>
                <Button onClick={handleAddEmployee}>Add</Button>
              </DataTableCell>
            </DataRow>
          </TableBody>
        </Table>
      </TableContainerStyled>
    </div>
  );
};

export default EmployeeTable;

