// src/Home/NotFound/NotFound.jsx
import React from 'react';
import ElectricBorder from './FuzzyText';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16, padding: '5rem 6rem' }}
      >
        <div>
          <p style={{ margin: '0.5rem 0', fontSize: '5rem', color: '#e4b75a', fontWeight: 'bold' }}>
            EduNite
          </p>
          <p style={{ margin: '0.5rem 0', fontSize: '6rem', color: '#ff4d4d', fontWeight: 'bold' }}>
            404
          </p>
          <p style={{ margin: '0.5rem 0', fontSize: '3rem', color: '#aaa' }}>
            Not Found
          </p>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default NotFound;
