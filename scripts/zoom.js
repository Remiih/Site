const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
  image.addEventListener('click', () => {
    if (image.style.transform === 'scale(2)') {
      image.style.transform = 'scale(1)';
    } else {
      image.style.transform = 'scale(2)';
    }
  });
});
