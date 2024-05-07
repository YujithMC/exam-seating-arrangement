const express= require('express')
const mysql=require('mysql')
const cors=require('cors')


const app=express()
app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
})

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });

  app.post('/std1', (req, res) => {
    const { USN, NAME, SECTION, SEMESTER } = req.body;
    const sql = 'INSERT INTO std1 (USN,NAME,SECTION,SEMESTER) VALUES (?, ?, ?, ?)';
    const values = [USN, NAME, SECTION,SEMESTER];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ id: result.insertId });
    });
  });

  app.post('/exam', (req, res) => {
    const { COURSE_ID, COURSE_NAME, DATE, TIME } = req.body;
    const sql = 'INSERT INTO EXAM (COURSE_ID, COURSE_NAME, DATE, TIME) VALUES (?, ?, ?, ?)';
    const values = [COURSE_ID, COURSE_NAME, DATE, TIME];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ id: result.insertId });
    });
  });

  app.post('/class', (req, res) => {
    const { ROOM_ID, CAPACITY, FLOOR, SEATING, COURSE_ID } = req.body;
    const sql = 'INSERT INTO CLASS (ROOM_ID, CAPACITY, FLOOR, SEATING, COURSE_ID) VALUES (?, ?, ?, ?, ?)';
    const values = [ROOM_ID, CAPACITY, FLOOR, SEATING, COURSE_ID];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err); 
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ id: result.insertId });
    });
  });
  

  app.post('/written_by', (req, res) => {
    const { USN, COURSE_ID } = req.body;
    const sql = 'INSERT INTO WRITTEN_BY (USN, COURSE_ID) VALUES (?, ?)';
    const values = [USN, COURSE_ID];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ id: result.insertId });
    });
  });
  

  app.post('/writes_exam_in', (req, res) => {
    const { USN, ROOM_ID } = req.body;
    const sql = 'INSERT INTO WRITES_EXAM_IN (USN, ROOM_ID) VALUES (?, ?)';
    const values = [USN, ROOM_ID];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ id: result.insertId });
    });
  });

  app.get('/sitting-arrangement/:ROOM_ID', (req, res) => {
    const { ROOM_ID } = req.params;
    const sql = `SELECT USN FROM writes_exam_in WHERE ROOM_ID = ?`;

    db.query(sql, [ROOM_ID], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(200).json(result);
    });
});


  



app.listen(8081,()=>{
    console.log("its working bro chill");
})