import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch('http://localhost:8080/api/students');
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          // Handle errors
          console.error('Failed to fetch student data.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.studentClass}</td>
              <td>{student.division}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
