// Carousel Functionality
let currentImageIndex = 0;
const images = [
  "assets/p1.jpg",
  "assets/mountain.jpg",
  "assets/City.jpg",
  "assets/p2.jpg",
  "assets/p3.jpg",
  "assets/p4.jpg",
  "assets/p5.jpg",
  "assets/p6.jpg",
  "assets/p7.jpg",
  "assets/p8.jpg",
  "assets/p9.jpg",
  "assets/p10.jpg",
  "assets/p11.jpg",
  "assets/p12.jpg",
  "assets/p13.jpg",
  "assets/p14.jpg",
  "assets/p15.jpg",
];

const carouselImage = document.getElementById("carousel-image");

document.getElementById("next").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  carouselImage.src = images[currentImageIndex];
});

document.getElementById("prev").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  carouselImage.src = images[currentImageIndex];
});

// Search Bar Functionality
const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");
const destinations = ["Paris", "New York", "Tokyo", "Bali", "Cape Town", "Santorini", "Dubai", "Rome", "London", "Barcelona"];

// Show suggestions based on search input
searchInput.addEventListener("input", function() {
  const query = searchInput.value.toLowerCase();
  searchSuggestions.innerHTML = "";
  
  if (query) {
    const filteredSuggestions = destinations.filter(destination => destination.toLowerCase().includes(query));
    
    filteredSuggestions.forEach(destination => {
      const div = document.createElement("div");
      div.textContent = destination;
      searchSuggestions.appendChild(div);
    });
  }
});

// Hide suggestions when a user clicks anywhere else
document.addEventListener("click", function(event) {
  if (!searchInput.contains(event.target)) {
    searchSuggestions.innerHTML = "";
  }
});

// Flexible Travel Modal
const flexibleBtn = document.getElementById('flexible-btn');
const travelIdeas = ['Paris', 'Tokyo', 'New York', 'Cape Town', 'Bali', 'Santorini'];
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const travelIdeasList = document.getElementById('travel-ideas');

// Open modal
flexibleBtn.addEventListener('click', () => {
  travelIdeasList.innerHTML = travelIdeas.map((idea) => `<li>${idea}</li>`).join('');
  modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});



