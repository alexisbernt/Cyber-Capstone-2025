import React from 'react';

export default function SeparatorCard({
  imageUrl = 'images/oregon.png',
  imageAlt = 'Oregon Image',
  titleText = 'Separator card',
  paragraphText = 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
}) {
  return (
    <div className="separator-container" style={{ width: '100%' }}>
      <div className="custom-card separator-card" style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
        <div className="card-content" style={{ padding: '20px' }}>
          <h2 className="card-title">{titleText}</h2>
          <p>{paragraphText}</p>
        </div>
      </div>
    </div>
  );
}
