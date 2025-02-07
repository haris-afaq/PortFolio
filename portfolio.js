document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector('.typing-text');

  if (typingText) {
    const textContent = typingText.textContent.trim();
    const textLength = textContent.length;

    if (textLength > 0) {
      const typingDuration = 4; 
      const typingAnimation = `typing ${typingDuration}s steps(${textLength}) infinite, blink-caret 0.75s step-end infinite`;

      typingText.style.animation = typingAnimation;
      typingText.style.width = "auto"; 
    }
  }
});
