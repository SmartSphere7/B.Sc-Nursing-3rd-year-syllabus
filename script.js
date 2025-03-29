// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Accordion for Answers
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Real-Time Search
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    document.querySelectorAll('.question-card').forEach(card => {
        const questionText = card.querySelector('.question').textContent.toLowerCase();
        card.style.display = questionText.includes(query) ? 'block' : 'none';
    });
});
