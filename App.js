// src/components/StudentForm.js

import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    class: '',
    division: '',
    gender: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform frontend validation here
      // Send a REST request to the Spring backend
      const response = await fetch('http://localhost:8080/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, date of birth, class, division, and gender */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
