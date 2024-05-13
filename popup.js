document.addEventListener('DOMContentLoaded', function () {
    var saveLinkButton = document.getElementById('saveLinkButton');
    var saveVideoPartButton = document.getElementById('saveVideoPartButton');

    saveLinkButton.addEventListener('click', saveLink);
    saveVideoPartButton.addEventListener('click', saveVideoPart);
});

function saveLink() {
    var linkInput = document.getElementById('linkInput');
    var link = linkInput.value.trim();

    if (link !== '') {
        // Save the link to storage
        alert("Mandib here savelink");
        linkInput.value = ''; // Clear the input field after saving
    } else {
        alert('Please enter a valid link.');
    }
}

function saveVideoPart() {
    var videoUrlInput = document.getElementById('videoUrlInput');
    var startTimeInput = document.getElementById('startTimeInput');
    var endTimeInput = document.getElementById('endTimeInput');

    var videoUrl = videoUrlInput.value.trim();
    var startTime = startTimeInput.value.trim();
    var endTime = endTimeInput.value.trim();

    if (videoUrl !== '' && startTime !== '' && endTime !== '') {
        // Save the video part to storage
        alert("Mandib here videosave");
        videoUrlInput.value = ''; // Clear the input fields after saving
        startTimeInput.value = '';
        endTimeInput.value = '';
    } else {
        alert('Please enter valid video URL, start time, and end time.');
    }
}
