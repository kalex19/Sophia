import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
      <div className="error-container">
        <h2 className="error-message">Page Not Found</h2>
        <Link to={'/'}>
        <button className="home-button">Return Home</button>
				</Link>
      </div>
    )
  };

export default Error;
