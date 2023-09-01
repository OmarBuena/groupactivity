import React, { useState } from 'react';

function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., send to an API
  };

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <label>Course:</label>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        <label>Section:</label>
        <input type="text" value={section} onChange={(e) => setSection(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
