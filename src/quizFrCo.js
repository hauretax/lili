// quizFrCo.js

let correctAnswer = 0;
let nbAnswer = 0;

const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
};

document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const options = []
    let correctAnswer = -1;

    function displayQuestion(question, options) {
        correctAnswer = options.findIndex(objet => objet.fr === question)
        questionElement.textContent = question;
        optionsContainer.innerHTML = "";
        const ulElement = document.createElement("ul");

        options.forEach((optionText, index) => {
            const liElement = document.createElement("li");
            const optionButton = document.createElement("button");
            optionButton.textContent = optionText.korean;
            optionButton.addEventListener("click", () => handleOptionClick(index));
            liElement.appendChild(optionButton);
            ulElement.appendChild(liElement);
        });

        optionsContainer.appendChild(ulElement);
    }

    function setPoint() {
        const pointElement = document.getElementById("point");
        pointElement.innerHTML = correctAnswer + "/" + nbAnswer
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setOptions(initialQuestion) {
        while (options.length < 3) {
            const option = getRandomQuestionFromVocabulary();
            if (!options.includes(option) && !(option === initialQuestion))
                options.push(option)
        }
        options.push(initialQuestion)
        return shuffleArray(options)
    }

    function handleOptionClick(selectedIndex) {
        playSound(options[selectedIndex].sound)
        console.log('nb!', correctAnswer)
        nbAnswer++
        if (correctAnswer != selectedIndex) {

        } else {
            console.log('correcte!', correctAnswer)
            correctAnswer++;
            const Question = getRandomQuestionFromVocabulary();
            displayQuestion(Question.fr, setOptions(Question));
        }
        setPoint()
    }

    function getRandomQuestionFromVocabulary() {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        return vocabulary[randomIndex];
    }
    const Question = getRandomQuestionFromVocabulary();

    displayQuestion(Question.fr, setOptions(Question));
});
