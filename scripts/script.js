// Expand/collapse functionality for sections
document.querySelectorAll('h2.cursor-pointer').forEach(header => {
    header.addEventListener('click', function (event) {
        // Prevent the event from propagating to the checkbox clicks
        event.stopPropagation();
        const contentId = this.id.replace('-header', '-content');
        const content = document.getElementById(contentId);
        content.classList.toggle('hidden');
    });
});

// Stop the dropdown from closing when clicking inside the dropdown content
document.querySelectorAll('.dropdown-content').forEach(content => {
    content.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

// Close sections only when clicking outside the left panel and navigation
window.addEventListener('click', (e) => {
    if (!document.querySelector('.left-panel').contains(e.target) && 
        !document.querySelector('nav').contains(e.target) &&
        !document.getElementById('map').contains(e.target)) { // Exclude map clicks
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.add('hidden');
        });
    }
});

document.getElementById('date-input').addEventListener('change', updateDateTimeDisplay);
document.getElementById('time-input').addEventListener('change', updateDateTimeDisplay);

function updateDateTimeDisplay() {
    const date = document.getElementById('date-input').value;
    const time = document.getElementById('time-input').value;

    if (date && time) {
        const datetimeString = `${date} ${time}`;
        document.getElementById('datetime-display').textContent = datetimeString;
    }
}

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
    const randomLocation = getRandomLatLng(38.75, 23.55, 0.1); // Random location within 0.1 degrees
    addAlertMarker(randomLocation, 'green', '🐛'); // Green worm emoji
});

document.getElementById('alert-fire').addEventListener('click', function () {
    const randomLocation = getRandomLatLng(38.75, 23.55, 0.1); // Random location within 0.1 degrees
    addAlertMarker(randomLocation, 'red', '🔥'); // Fire emoji
});
