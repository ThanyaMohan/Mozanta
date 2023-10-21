import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/students').then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Class</th>
          <th>Division</th>
          <th>Gender</th>
          <th>Admission Number</th>
        </tr>
      </thead>
      <tbody>
        {students.sort((a, b) => a.name.localeCompare(b.name)).map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.dob.toLocaleDateString()}</td>
            <td>{student.clazz}</td>
            <td>{student.division}</td>
            <td>{student.gender}</td>
            <td>{student.admissionNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
