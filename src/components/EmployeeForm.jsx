import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ addEmployee, updateEmployee, currentEmployee }) => {
  const [employeeData, setEmployeeData] = useState({
    id: '',
    name: '',
    position: '',
    department: '',
    dob: '',
    email: '',
    phone: ''
  });

  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (currentEmployee) {
      setEmployeeData(currentEmployee);
      setIsEditMode(true); 
    }
  }, [currentEmployee]);

  
  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      
      updateEmployee(employeeData);
    } else {
      
      const newEmployee = { ...employeeData, id: Date.now().toString() }; 
      addEmployee(newEmployee);
    }
    setEmployeeData({ id: '', name: '', position: '', department: '', dob: '', email: '', phone: '' });
    setIsEditMode(false);
  };

  const validateForm = () => {
    const { name, position, department, dob, email } = employeeData;
    return name && position && department && dob && /\S+@\S+\.\S+/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">{isEditMode ? 'Update Employee' : 'Add New Employee'}</h2>

      <input
        className="input-field"
        name="name"
        value={employeeData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="input-field"
        name="position"
        value={employeeData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        className="input-field"
        name="department"
        value={employeeData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        className="input-field"
        name="dob"
        type="date"
        value={employeeData.dob}
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        name="email"
        type="email"
        value={employeeData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        className="input-field"
        name="phone"
        type="number"
        value={employeeData.phone}
        onChange={handleChange}
        placeholder="Phone Number (optional)"
      />

      <button
        type="submit"
        className={`submit-button ${isEditMode ? 'update' : ''} ${!validateForm() ? 'disabled' : ''}`}
        disabled={!validateForm()}
      >
        {isEditMode ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
};

export default EmployeeForm;
