import React, { useEffect, useState } from 'react';

const SittingArrangement = () => {
    const [roomId, setRoomId] = useState('');
    const [student, setStudent] = useState([]);

    useEffect(() => {
        const fetchSittingArrangement = async () => {
            const response = await fetch(`http://localhost:8081/sitting-arrangement/${roomId}`)
                .then(res => res.json());
            setStudent(response.map(student => student.USN));
        }

        if (roomId.length) fetchSittingArrangement();
    }, [roomId]);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor='roomId' style={{ paddingRight: '10px', fontWeight: 'bold' }}>Room ID:</label>
                <input id='roomId' type='number' onChange={(e) => setRoomId(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <table style={{ margin: '0 auto', width: '50%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>USN</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((usn, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{usn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SittingArrangement;
