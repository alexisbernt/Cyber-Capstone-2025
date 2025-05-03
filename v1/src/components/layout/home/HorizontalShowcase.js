import React, { useState, useEffect } from 'react';

export default function HorizontalShowcase() {
  const images = ['images/bubbles1.png', 'images/bubbles2.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`bubbles${index + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  );
}
