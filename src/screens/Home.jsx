import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

const Home = ({ addEmployee, updateEmployee, currentEmployee }) => {
  return (
    <div>
      <h2>Add Employee Details</h2>
      <EmployeeForm 
        addEmployee={addEmployee} 
        updateEmployee={updateEmployee} 
        currentEmployee={currentEmployee} 
      />
    </div>
  );
};

export default Home;
