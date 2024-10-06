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
