// Audio button functionality
const audioButton = document.getElementById('toggleAudio');
const audio = new Audio('./audio/theme.mp3'); // Replace 'theme.mp3' with your audio file

let isAudioPlaying = false;

audioButton.addEventListener('click', () => {
    if (isAudioPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isAudioPlaying = !isAudioPlaying;
});