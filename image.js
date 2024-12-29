const thumbnails = document.querySelectorAll('.thumbnail');
const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

// Function to update the displayed image
function updateImage(index) {
  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === index);
  });
  currentImage.src = thumbnails[index].src;
  currentIndex = index;
}

// Add click event to thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => updateImage(index));
});

// Navigation buttons
prevButton.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage(newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % thumbnails.length;
  updateImage(newIndex);
});
