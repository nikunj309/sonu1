import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees, deleteEmployee, editEmployee, viewEmployee }) => {
    const navigate = useNavigate();

    const handleEdit = (employee) => {
        editEmployee(employee);    
        navigate('/');             
      };
  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.dob}</td>
                <td>{employee.email}</td>
                <td>{employee.phone || 'N/A'}</td>
                <td>
                  <div className="actions-buttons">
                    <button className="view" onClick={() => viewEmployee(employee)}>View</button>
                    <button className="update" onClick={() =>  handleEdit(employee)}>Update</button>
                    <button className="delete" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
