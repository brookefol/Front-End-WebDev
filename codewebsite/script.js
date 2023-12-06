const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

/**
 * Step 1: Create a quizData object!
 * quizData have 3 properties: question, options, and correctAnswer.
 */
const quizData = [
    {
        question: "If I write list.get(2) in my code, what kind of collection type am I using?",
        options: ["ArrayList", "LinkedList", "Dictionary", "Collection"],
        correctAnswer: "ArrayList",
    },
    {
        question: "Which language is used to make websites interactive?",
        options: ["JavaScript", "Python", "Java", "Code Language"],
        correctAnswer: "JavaScript",
    },
    {
        question:
            "What animal is the mascot of the ATCS Academy? ",
        options: ["Duck", "Bear", "Walrus", "Unicorn"],
        correctAnswer: "Duck",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {
    // Step 2
    const question = quizData[index];
    questionElement.textContent = question.question;

    // Create a for loop that iterates through the options
    // Create a button element with the text of that option
    // Add an event listen to the button to call checkAnswer
    optionsElement.innerHTML = "";


    for(let i = 0; i < question.options.length; i++){
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }

}

function checkAnswer(selectedOption) {
    // Step 3
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if(selectedOption === correctAnswer){
        correct++;
        alert("Correct!");
    }
    else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }

    currentQuestionIndex++

    // Move on to next question
    if(currentQuestionIndex < quizData.length){
        showQuestion(currentQuestionIndex);
    }
    else {
        questionElement.textContent =   `Quiz complete! You scored ${correct} out of ${quizData.length}!`
        optionsElement.innerHTML = "";
    }

}

// Start the quiz
showQuestion(currentQuestionIndex)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}