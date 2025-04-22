// createSeparatorCard.js
export default function createSeparatorCard() {
    const container = document.createElement('div');
    container.className = 'separator-container';
  
    const card = document.createElement('div');
    card.className = 'custom-card separator-card';
  
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image';
  
    const img = document.createElement('img');
    img.src = 'images/oregon.png';
    img.alt = 'Oregon Image';
  
    imageWrapper.appendChild(img);
  
    const content = document.createElement('div');
    content.className = 'card-content';
  
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = 'Separator card';
  
    const text = document.createElement('p');
    text.textContent = 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.';
  
    content.appendChild(title);
    content.appendChild(text);
  
    card.appendChild(imageWrapper);
    card.appendChild(content);
    container.appendChild(card);
  
    return container; // ✅ Return the DOM element for appending
  }
  