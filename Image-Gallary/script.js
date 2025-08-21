const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.effect').forEach(imgDiv => {
  imgDiv.addEventListener('click', () => {
    const bg = window.getComputedStyle(imgDiv).backgroundImage; 
    const url = bg.slice(5, -2); // remove url(" ... ")
    lightboxImg.src = url;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
