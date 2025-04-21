// Toggle logic (make sure it's available if you're importing this elsewhere)
function toggleReveal(element) {
    const card = element.closest('.reveal-card');
    card.classList.toggle('revealed');
  }
  
// Create the card element dynamically and return it
export default function createRevealCard() {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const card = document.createElement('div');
    card.className = 'custom-card reveal-card';

    // Image section
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    cardImage.onclick = function () { toggleReveal(this); };

    const image = document.createElement('img');
    image.src = 'images/office.jpg';
    image.alt = 'Office Image';
    cardImage.appendChild(image);

    // Content section
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.onclick = function () { toggleReveal(this); };
    title.innerHTML = 'Card Title <span class="icon">⋮</span>';

    const paragraph = document.createElement('p');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'This is a link';
    paragraph.appendChild(link);

    cardContent.appendChild(title);
    cardContent.appendChild(paragraph);

    // Reveal section
    const cardReveal = document.createElement('div');
    cardReveal.className = 'card-reveal';

    const revealTitle = document.createElement('h2');
    revealTitle.className = 'card-title';
    revealTitle.innerHTML = 'Card Title <span class="icon">✕</span>';
    revealTitle.querySelector('.icon').onclick = function () { toggleReveal(this); };

    const revealText = document.createElement('p');
    revealText.textContent = 'Here is some more information about this product that is only revealed once clicked on.';

    cardReveal.appendChild(revealTitle);
    cardReveal.appendChild(revealText);

    // Combine all parts
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    card.appendChild(cardReveal);
    cardContainer.appendChild(card);

    // Return the full element
    return cardContainer;
    }
