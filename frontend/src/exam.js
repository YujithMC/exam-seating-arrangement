import React, { useState } from 'react';
import axios from 'axios';

function Exam() {
  const [values, setValues] = useState({
    EXAM_ID: '',
    EXAM_NAME: '',
    EXAM_DATE: '',
    COURSE_ID: '',
    ROOM_ID: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/exam', values)
      .then((res) => {
        console.log('Exam added successfully:', res.data);
        // Handle success or redirect the user as needed
      })
      .catch((err) => {
        console.log('Failed to add exam:', err);
        // Handle errors or show an error message to the user
      });
  };

  return (
    <div style={{ background: 'url("sahadriimage.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Exam</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="COURSE_ID">COURSE ID:</label>
            <input type="text" id="COURSE_ID" name="COURSE_ID" value={values.COURSE_ID} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="COURSE_NAME">COURSE Name:</label>
            <input type="text" id="COURSE_NAME" name="COURSE_NAME" value={values.COURSE_NAME} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="DATE">DATE:</label>
            <input type="text" id="DATE" name="DATE" value={values.DATE} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="TIME">TIME:</label>
            <input type="text" id="TIME" name="TIME" value={values.TIME} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Exam;
