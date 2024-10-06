// Initialize the map
const map = L.map('map').setView([38.75, 23.55], 11);

// Base Layer (Satellite)
const satelliteLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Layer group for Satellite Rectangles (random colors from 0.5 to 0.6 on gradient)
const satelliteGroup = L.layerGroup();
for (let lat = 38.7; lat < 38.78; lat += 0.02) {
    for (let lng = 23.5; lng < 23.58; lng += 0.02) {
        const colorValue = (Math.random() * 0.2) + 0.5; // Random between 0.5 and 0.6
        const color = `hsl(${(1 - colorValue) * 120}, 100%, 50%)`; // Green to Red

        L.rectangle([[lat, lng], [lat + 0.02, lng + 0.02]], {
            color: color,
            fillOpacity: 0.5
        }).addTo(satelliteGroup);
    }
}
satelliteGroup.addTo(map);

// Layer group for Sensor Rectangles (random colors from 0.4 to 0.7 on gradient)
const sensorGroup = L.layerGroup();
for (let lat = 38.7; lat < 38.77; lat += 0.01) {
    for (let lng = 23.5; lng < 23.58; lng += 0.01) {
        const colorValue = (Math.random() * 0.5) + 0.3; // Random between 0.4 and 0.7
        const color = `hsl(${(1 - colorValue) * 120}, 100%, 50%)`;

        L.rectangle([[lat, lng], [lat + 0.01, lng + 0.01]], {
            color: color,
            fillOpacity: 0.5
        }).addTo(sensorGroup);
    }
}
sensorGroup.addTo(map);

// User Layer (Single point and circle)
const userGroup = L.layerGroup();
// const userLatLng1 = [38.75, 23.52];
// const userLatLng2 = [38.70, 23.55];

// L.circle(userLatLng1, { radius: 3000, color: `hsl(${(0.8) * 120}, 100%, 50%)`, fillOpacity: 0.2 }).addTo(userGroup); // Radius in meters
// L.marker(userLatLng1, { color: `hsl(${(0.8) * 120}, 100%, 50%)` }).addTo(userGroup);

// L.circle(userLatLng2, { radius: 3000, color: `hsl(${(0.5) * 120}, 100%, 50%)`, fillOpacity: 0.2 }).addTo(userGroup); // Radius in meters
// L.marker(userLatLng2, { color: `hsl(${(0.8) * 120}, 100%, 50%)` }).addTo(userGroup);

userGroup.addTo(map);

// Function to toggle layers
function toggleLayer(checkboxId, layerGroup) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(layerGroup);
        } else {
            map.removeLayer(layerGroup);
        }
    });
}

// Toggle for satellite, sensor, and user layers
toggleLayer('satellite-checkbox', satelliteGroup);
toggleLayer('sensor-checkbox', sensorGroup);
toggleLayer('user-checkbox', userGroup);

// Function to generate random coordinates within a specified range
function getRandomLatLng(lat, lng, range) {
    const randomLat = lat + (Math.random() - 0.5) * range; // Random lat within the range
    const randomLng = lng + (Math.random() - 0.5) * range; // Random lng within the range
    return [randomLat, randomLng];
}

// Function to add alert markers to the map
function addAlertMarker(latlng, color, emoji) {
    // Create a marker with the emoji
    const marker = L.marker(latlng, { icon: L.divIcon({ className: 'custom-icon', html: emoji, iconSize: [30, 30] }) }).addTo(userGroup);

    // Add a circle around the marker
    L.circle(latlng, { radius: 3000, color: color, fillOpacity: 0.2 }).addTo(userGroup);
}

// Event listeners for alert buttons
document.getElementById('alert-worm').addEventListener('click', function () {
    const randomLocation = getRandomLatLng(38.75, 23.55, 0.1); // Random location within 0.02 degrees
    addAlertMarker(randomLocation, 'green', '🐛'); // Green worm emoji
});

// document.getElementById('alert-warning').addEventListener('click', function () {
//     const randomLocation = getRandomLatLng(38.75, 23.55, 0.1); // Random location within 0.02 degrees
//     addAlertMarker(randomLocation, 'orange', '⚠️'); // Warning emoji
// });

document.getElementById('alert-fire').addEventListener('click', function () {
    const randomLocation = getRandomLatLng(38.75, 23.55, 0.1); // Random location within 0.02 degrees
    addAlertMarker(randomLocation, 'red', '🔥'); // Fire emoji
});
