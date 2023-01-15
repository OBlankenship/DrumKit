// Play sound, and add animation to the element
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
})

// Add listener to remove animation
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', () => key.classList.remove("playing")));