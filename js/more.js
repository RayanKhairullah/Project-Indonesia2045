// Get all the "Read More" buttons
const buttons = document.querySelectorAll('.program-btn');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior (e.g., navigation)

        // Find the paragraph or text container before the button
        const paragraph = this.previousElementSibling;

        // Toggle expanded class and button text
        paragraph.classList.toggle('expanded');
        this.textContent = paragraph.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});
