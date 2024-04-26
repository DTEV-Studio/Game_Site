// Audio button functionality
const audioButton = document.getElementById('toggleAudio');
let audioFiles = ['./audio/theme1.mp3', './audio/theme2.mp3', './audio/theme3.mp3']; // Replace with your audio files
let currentAudioIndex = Math.floor(Math.random() * audioFiles.length); // Generate a random index
let audio = new Audio(audioFiles[currentAudioIndex]);
audio.loop = true; // Set loop to true

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

    // Fade out the audio button only after the first click
    if (!isFirstClick) {
        audioButton.style.opacity = '0';
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
    
    // Reset opacity of the audio button after the fade-out animation
    setTimeout(() => {
        audioButton.style.opacity = '1';
    }, 500); // Adjust the duration to match the CSS transition duration
});