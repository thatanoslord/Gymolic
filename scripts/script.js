// Add a subtle animation or hover effect (optional)
document.querySelector('.cta').addEventListener('mouseenter', () => {
  document.querySelector('.arrow').style.transform = 'translateX(4px)';
});

document.querySelector('.cta').addEventListener('mouseleave', () => {
  document.querySelector('.arrow').style.transform = 'translateX(0)';
});

//email address functionality
document.querySelector('.copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText('sabbarmoussa@gmail.com');
  alert('Email copied to clipboard!');
});