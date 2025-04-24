import React from 'react';

export default function RevealCard({ imageUrl, imageAlt, titleText, linkHref, linkText, revealInfo }) {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="card-container">
      <div className={`custom-card reveal-card ${revealed ? 'revealed' : ''}`}>
        {/* Image section */}
        <div className="card-image" onClick={() => setRevealed(!revealed)}>
          <img src={imageUrl} alt={imageAlt} />
        </div>

        {/* Content section */}
        <div className="card-content">
          <h2 className="card-title" onClick={() => setRevealed(!revealed)}>
            {titleText} <span className="icon">⋮</span>
          </h2>
          <p>
            <a href={linkHref}>{linkText}</a>
          </p>
        </div>

        {/* Reveal section */}
        {revealed && (
          <div className="card-reveal">
            <h2 className="card-title">
              {titleText} <span className="icon" onClick={() => setRevealed(false)}>✕</span>
            </h2>
            <p>{revealInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}


// // Toggle logic (make sure it's available if you're importing this elsewhere)
// function toggleReveal(element) {
//   const card = element.closest('.reveal-card');
//   card.classList.toggle('revealed');
// }

// // Create the card element dynamically and return it
// export default function createRevealCard({
//   imageUrl = 'images/office.jpg',
//   imageAlt = 'Office Image',
//   titleText = 'Card Title',
//   linkHref = '#',
//   linkText = 'This is a link',
//   revealInfo = 'Here is some more information about this product that is only revealed once clicked on.'
// } = {}) {
//   const cardContainer = document.createElement('div');
//   cardContainer.className = 'card-container';

//   const card = document.createElement('div');
//   card.className = 'custom-card reveal-card';

//   // Image section
//   const cardImage = document.createElement('div');
//   cardImage.className = 'card-image';
//   cardImage.onclick = function () { toggleReveal(this); };

//   const image = document.createElement('img');
//   image.src = imageUrl;
//   image.alt = imageAlt;
//   cardImage.appendChild(image);

//   // Content section
//   const cardContent = document.createElement('div');
//   cardContent.className = 'card-content';

//   const title = document.createElement('h2');
//   title.className = 'card-title';
//   title.onclick = function () { toggleReveal(this); };
//   title.innerHTML = `${titleText} <span class="icon">⋮</span>`;

//   const paragraph = document.createElement('p');
//   const link = document.createElement('a');
//   link.href = linkHref;
//   link.textContent = linkText;
//   paragraph.appendChild(link);

//   cardContent.appendChild(title);
//   cardContent.appendChild(paragraph);

//   // Reveal section
//   const cardReveal = document.createElement('div');
//   cardReveal.className = 'card-reveal';

//   const revealTitle = document.createElement('h2');
//   revealTitle.className = 'card-title';
//   revealTitle.innerHTML = `${titleText} <span class="icon">✕</span>`;
//   revealTitle.querySelector('.icon').onclick = function () { toggleReveal(this); };

//   const revealText = document.createElement('p');
//   revealText.textContent = revealInfo;

//   cardReveal.appendChild(revealTitle);
//   cardReveal.appendChild(revealText);

//   // Combine all parts
//   card.appendChild(cardImage);
//   card.appendChild(cardContent);
//   card.appendChild(cardReveal);
//   cardContainer.appendChild(card);

//   return cardContainer;
// }
