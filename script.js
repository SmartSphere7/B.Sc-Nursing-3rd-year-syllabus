function searchQuestions() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let questions = document.getElementById('questionList').getElementsByTagName('li');

    for (let i = 0; i < questions.length; i++) {
        let text = questions[i].innerText.toLowerCase();
        if (text.includes(input)) {
            questions[i].style.display = "";
        } else {
            questions[i].style.display = "none";
        }
    }
}
