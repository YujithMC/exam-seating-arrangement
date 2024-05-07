import React, { useState } from 'react';
import axios from 'axios';

function Class() {
  const [values, setValues] = useState({
    ROOM_ID: '',
    CAPACITY: '',
    FLOOR: '',
    SEATING: '',
    COURSE_ID: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    axios.post('http://localhost:8081/class', values)
      .then((res) => {
        console.log('Class added successfully:', res.data);
        // Handle success or redirect the user as needed
      })
      .catch((err) => {
        console.log('Failed to add class:', err);
        // Handle errors or show an error message to the user
      });
  };

  return (
    <div style={{ background: 'url("sahadriimage.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Class</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="ROOM_ID">Room ID:</label>
            <input type="text" id="ROOM_ID" name="ROOM_ID" value={values.ROOM_ID} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="CAPACITY">Capacity:</label>
            <input type="text" id="CAPACITY" name="CAPACITY" value={values.CAPACITY} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="FLOOR">Floor:</label>
            <input type="text" id="FLOOR" name="FLOOR" value={values.FLOOR} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="SEATING">Seating:</label>
            <input type="text" id="SEATING" name="SEATING" value={values.SEATING} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="COURSE_ID">Course ID:</label>
            <input type="text" id="COURSE_ID" name="COURSE_ID" value={values.COURSE_ID} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Class;
