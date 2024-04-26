// Audio button functionality
const audioButton = document.getElementById('toggleAudio');
let audioFiles = ['./audio/theme1.mp3', './audio/theme2.mp3', './audio/theme3.mp3']; // Replace with your audio files
let currentAudioIndex = Math.floor(Math.random() * audioFiles.length); // Generate a random index
let audio = new Audio(audioFiles[currentAudioIndex]);
// Decrease the volume by 80%
audio.volume = 0.2; // 20% of the original volume

let isAudioPlaying = false;
let isFirstClick = true; // Flag to track if the audio button has been clicked for the first time

audioButton.addEventListener('click', () => {
    if (isFirstClick) {
        isFirstClick = false; // Set the flag to false after the first click
    }

    if (isAudioPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isAudioPlaying = !isAudioPlaying;

    // Hide the audio button only after the first click
    if (!isFirstClick) {
        document.getElementById('audioButton').style.display = 'none';
    }
});

// Show the audio button when the audio finishes playing
audio.addEventListener('ended', () => {
    // Generate a random index for the next audio file
    let nextAudioIndex;
    do {
        nextAudioIndex = Math.floor(Math.random() * audioFiles.length);
    } while (nextAudioIndex === currentAudioIndex); // Ensure the next index is not the same as the current one

    currentAudioIndex = nextAudioIndex;
    audio.src = audioFiles[currentAudioIndex]; // Update the audio source
    audio.play(); // Play the next audio file
});
