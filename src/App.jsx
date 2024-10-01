import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import EmployeeListPage from './screens/EmployeeListPage';
import Navbar from './components/Navbar';

const App = () => {
  const [employees, setEmployees] = useState(() => {
    
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });
  const [currentEmployee, setCurrentEmployee] = useState(null);

  
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
  };

  const editEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  const viewEmployee = (employee) => {
    alert(JSON.stringify(employee, null, 2));
  };

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                addEmployee={addEmployee} 
                updateEmployee={updateEmployee} 
                currentEmployee={currentEmployee} 
              />
            } 
          />
          <Route 
            path="/employees" 
            element={
              <EmployeeListPage 
                employees={employees} 
                deleteEmployee={deleteEmployee} 
                editEmployee={editEmployee} 
                viewEmployee={viewEmployee} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
