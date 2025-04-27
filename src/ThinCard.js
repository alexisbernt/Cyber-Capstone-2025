import React from 'react';

export default function ThinCard({
  titleText = 'Separator Card'
}) {
  return (
    <div className="separator-container" style={{ width: '100%' }}>
      <div
        className="custom-card separator-card"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          height: '100px', // controls card height
          backgroundColor: '#37474f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <h2 className="card-title" style={{ margin: 0, color: '#fff' }}>{titleText}</h2>
      </div>
    </div>
  );
}


