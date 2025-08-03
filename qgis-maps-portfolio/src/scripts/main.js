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