const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
        correctAnswer: 0
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Giraffe"],
        correctAnswer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: 2
    },
    {
        question: "What is the largest continent by area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "H2SO4"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const nextBtn = document.getElementById('next-btn');
const questionBox = document.getElementById('question-box');
const feedback = document.getElementById('feedback');
const scoreBox = document.getElementById('score');

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionBox.innerHTML = `
        <div class="question">
            <p><strong>${questionData.question}</strong></p>
            <div class="options">
                ${questionData.options.map((option, index) => 
                    `<button class="option-btn btn btn-light" onclick="checkAnswer(${index})">${option}</button>`
                ).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    
    if (selectedIndex === correctAnswerIndex) {
        score++;
        feedback.innerHTML = `<span class="text-success">Correct!</span>`;
    } else {
        feedback.innerHTML = `<span class="text-danger">Wrong!</span>`;
    }
    
    scoreBox.innerHTML = `Score: ${score}`;
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextBtn.disabled = true;
        feedback.innerHTML = '';
    } else {
        questionBox.innerHTML = `<h4>Quiz Finished!</h4>`;
        nextBtn.style.display = 'none';
        feedback.style.display = 'none';
    }
});

loadQuestion();
nextBtn.disabled = true;
