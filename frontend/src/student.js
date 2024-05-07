import React, { useState } from 'react';
import axios from 'axios';

function Student() {
  const [values, setValues] = useState({
    USN: '',
    NAME: '',
    SECTION: '',
    SEMESTER: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/std1', values)
      .then((res) => {
        if (res.data.error) {
          setSubmitMessage('USN already submitted');
        } else {
          setSubmitMessage('Submitted');
        }
      })
      .catch((err) => {
        console.log('Failed to add student:', err);
      });
  };

  return (
    <div style={{ background: 'url("sahadriimage.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="USN">USN:</label>
            <input type="text" id="USN" name="USN" value={values.USN} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="NAME">Name:</label>
            <input type="text" id="NAME" name="NAME" value={values.NAME} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="SECTION">Section:</label>
            <input type="text" id="SECTION" name="SECTION" value={values.SECTION} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="SEMESTER">Semester:</label>
            <input type="text" id="SEMESTER" name="SEMESTER" value={values.SEMESTER} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SUBMIT</button>
        </form>
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </div>
  );
}

export default Student;
