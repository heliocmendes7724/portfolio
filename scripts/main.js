const mapContainer = document.getElementById('map-container');

// Function to initialize the map
function initMap() {
    const map = L.map(mapContainer).setView([0, 0], 2); // Set initial view

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Load and display QGIS maps (example)
    loadQGISMaps(map);
}

// Function to load QGIS maps
function loadQGISMaps(map) {
    // Example of adding a marker (replace with actual QGIS map data)
    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
}

// Event listener for DOMContentLoaded to initialize the map
document.addEventListener('DOMContentLoaded', initMap);

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.banner-slide');
    const btnLeft = document.querySelector('.banner-btn-left');
    const btnRight = document.querySelector('.banner-btn-right');
    let current = 0;
    let intervalId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(intervalId);
        startAutoSlide();
    }

    btnLeft.addEventListener('click', function() {
        prevSlide();
        resetAutoSlide();
    });

    btnRight.addEventListener('click', function() {
        nextSlide();
        resetAutoSlide();
    });

    showSlide(current);
    startAutoSlide();
});