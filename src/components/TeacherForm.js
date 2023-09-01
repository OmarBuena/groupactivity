// TeacherForm.js
import React, { useState } from 'react';

function TeacherForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subjectsHandled, setSubjectsHandled] = useState([]);
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., send to an API
  };

  return (
    <div>
      <h2>Teacher Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Subjects Handled:</label>
        <input type="text" value={subjectsHandled} onChange={(e) => setSubjectsHandled(e.target.value)} />
        <label>Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TeacherForm;
