import React from 'react';

const EmployeeDetails = ({ employee, onBack }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Date of Birth:</strong> {employee.dob}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone || 'N/A'}</p>
          <button onClick={onBack}>Back to List</button>
        </div>
      ) : (
        <p>No employee selected.</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
