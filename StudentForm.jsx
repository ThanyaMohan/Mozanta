import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [clazz, setClazz] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/students', {
      name,
      dob,
      clazz,
      division,
      gender,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <label>Date of Birth:</label>
      <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} />

      <label>Class:</label>
      <select value={clazz} onChange={(event) => setClazz(event.target.value)}>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
        <option value="IX">IX</option>
        <option value="X">X</option>
        <option value="XI">XI</option>
        <option value="XII">XII</option>
      </select>

      <label>Division:</label>
      <select value={division} onChange={(event) => setDivision(event.target.value)}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <label>Gender:</label>
      <input type="radio" value="Male" checked={gender === 'Male'} onChange={(event) => setGender(event.target.value)} /> Male
      <input type="radio" value="Female" checked={gender === 'Female'} onChange={(event) => setGender(event.target.value)} /> Female

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;

