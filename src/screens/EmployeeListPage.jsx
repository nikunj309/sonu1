import React from 'react';
import EmployeeList from '../components/EmployeeList';

const EmployeeListPage = ({ employees, deleteEmployee, editEmployee, viewEmployee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <EmployeeList 
        employees={employees} 
        deleteEmployee={deleteEmployee} 
        editEmployee={editEmployee} 
        viewEmployee={viewEmployee} 
      />
    </div>
  );
};

export default EmployeeListPage;
