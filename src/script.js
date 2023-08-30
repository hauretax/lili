

const buttonsContainer = document.getElementById('buttonsContainer');

const createButton = (text, sound) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => playSound(sound));
    return button;
};

const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
};

vocabulary.forEach(word => {
    const button = createButton(word.korean, word.sound);
    buttonsContainer.appendChild(button);
});
