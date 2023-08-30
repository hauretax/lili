// quizFrCo.js

document.addEventListener("DOMContentLoaded", function () {
    console.log(vocabulary)
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    function displayQuestion(question, options) {
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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setOptions(initialQuestion) {
        const options = []
        while (options.length < 3) {
            const option = getRandomQuestionFromVocabulary();
            if (!options.includes(option) && !(option === initialQuestion))
                options.push(option)
        }
        options.push(initialQuestion)
        return shuffleArray(options)
    }

    function handleOptionClick(selectedIndex) {
        // Implémentez ici la logique pour vérifier si la réponse est correcte
        // Et affichez un feedback à l'utilisateur

        // Après avoir géré le clic, affichez une nouvelle question
        const Question = getRandomQuestionFromVocabulary();
       displayQuestion(Question.fr,setOptions(Question));
    }

    function getRandomQuestionFromVocabulary() {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        return vocabulary[randomIndex];
    }


    const Question = getRandomQuestionFromVocabulary();

    displayQuestion(Question.fr,setOptions(Question));
});
