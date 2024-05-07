import React, { useState } from 'react';
import axios from 'axios';

function WrittenBy() {
  const [formData, setFormData] = useState({
    USN: '',
    COURSE_ID: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8081/written_by', formData);
      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <div style={{ background: 'url("sahadriimage.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Written By</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
            <label htmlFor="USN">USN:</label>
            <input type="text" id="USN" name="USN" value={formData.USN} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
            <label htmlFor="USN">Course ID:</label>
            <input type="text" id="COURSE_ID" name="COURSE_ID" value={formData.COURSE_ID} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
    </div>
);
}

export default WrittenBy;
