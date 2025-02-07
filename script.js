


function toggleContactForm() {
    const popup = document.getElementById('contactPopup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Close popup when clicking outside the form
window.onclick = function(event) {
    const popup = document.getElementById('contactPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
// Typing animation for the About section
const aboutText = `Hello! I'm a web developer passionate about creating beautiful and functional websites.
With a love for design and coding, I bring ideas to life through clean, modern, and user-friendly interfaces.
Let's build something amazing together!`;

const typingText = document.getElementById('typing-text');
let aboutIndex = 0;

function typeAboutText() {
  if (aboutIndex < aboutText.length) {
    typingText.textContent += aboutText.charAt(aboutIndex); // Add one character at a time
    aboutIndex++;
    setTimeout(typeAboutText, 50); // Adjust typing speed here (50ms per character)
  }
}

// Typing animation for the CSS code
const cssCode = `.about-section {
  padding: 60px 20px;
  background: linear-gradient(45deg, #FFF2C2, #FFFDF0, #EFF3EA);
}

.about-container {
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
}`;

const cssCodeElement = document.getElementById('css-code');
let cssIndex = 0;

function typeCssCode() {
  if (cssIndex < cssCode.length) {
    cssCodeElement.textContent += cssCode.charAt(cssIndex); // Add one character at a time
    cssIndex++;
    setTimeout(typeCssCode, 50); // Adjust typing speed here (50ms per character)
  }
}

// Start both typing animations when the page loads
window.onload = () => {
  typeAboutText();
  typeCssCode();
};



const imageUrls = [
'./img/photo1.jpg',
'./img/photo2.jpg',
'./img/photo3.jpg',
'./img/photo4.jpg',
'./img/photo5.jpg',
'./img/photo6.jpg',
'./img/photo7.jpg',
'./img/photo8.jpg',
'./img/photo9.jpg',
'./img/photo10.jpg',
'./img/photo11.jpg',
'./img/photo12.jpg',
'./img/photo13.jpg',
'./img/photo14.jpg',
'./img/photo15.jpg',
'./img/photo16.jpg',
'./img/photo17.jpg',
'./img/photo18.jpg',
'./img/photo19.jpg',
'./img/photo20.jpg',
'./img/photo21.jpg',
'./img/photo22.jpg',
'./img/photo23.jpg',
'./img/photo24.jpg',
'./img/photo25.jpg',
'./img/photo26.jpg',
'./img/photo27.jpg',
'./img/photo28.jpg',
'./img/photo29.jpg',
'./img/photo30.jpg',







];

const rows = document.querySelectorAll('.row');

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

rows.forEach(row => {
  // Shuffle the image URLs for each row
  const shuffledImages = shuffleArray([...imageUrls]);

  // Add images twice to ensure seamless looping
  for (let i = 0; i < 2; i++) {
    shuffledImages.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      row.appendChild(img);
    });
  }
});
// scripts.js
// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header Fade Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('faded');
    } else {
        header.classList.remove('faded');
    }
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #6a11cb, #2575fc)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #ff7e5f, #feb47b)';
    }
});
