document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("questionContainer");
    const searchBox = document.getElementById("searchBox");
    const addQuestionButton = document.getElementById("addQuestion");
    const darkModeToggle = document.getElementById("darkModeToggle");

    let questions = JSON.parse(localStorage.getItem("questions")) || [];

    function renderQuestions() {
        questionContainer.innerHTML = "";
        questions.forEach((q, index) => {
            const questionCard = document.createElement("div");
            questionCard.classList.add("question-card");

            const questionButton = document.createElement("button");
            questionButton.textContent = q.question;
            questionButton.addEventListener("click", () => {
                answerDiv.style.display = answerDiv.style.display === "block" ? "none" : "block";
            });

            const answerDiv = document.createElement("div");
            answerDiv.classList.add("answer");
            answerDiv.textContent = q.answer;
            questionCard.appendChild(questionButton);
            questionCard.appendChild(answerDiv);
            questionContainer.appendChild(questionCard);
        });
    }

    addQuestionButton.addEventListener("click", () => {
        const userQuestion = prompt("Enter your question:");
        const userAnswer = prompt("Enter the answer:");

        if (userQuestion && userAnswer) {
            questions.push({ question: userQuestion, answer: userAnswer });
            localStorage.setItem("questions", JSON.stringify(questions));
            renderQuestions();
        }
    });

    searchBox.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll(".question-card").forEach(card => {
            const question = card.querySelector("button").textContent.toLowerCase();
            card.style.display = question.includes(searchTerm) ? "block" : "none";
        });
    });

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    renderQuestions();
});
