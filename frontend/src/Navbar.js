import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/" style={{ color: 'white' }}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student" style={{ color: 'white' }}>STUDENT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/class" style={{ color: 'white' }}>CLASS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exam" style={{ color: 'white' }}>EXAM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/written_by" style={{ color: 'white' }}>WRITTEN BY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/writes_exam_in" style={{ color: 'white' }}>WRITES EXAM IN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sitting-arrangement" style={{ color: 'white' }}>SEATING ARRANGEMENT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
