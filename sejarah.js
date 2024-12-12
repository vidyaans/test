// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript untuk Selector Timeline
const yearButtons = document.querySelectorAll('.year-btn');
const yearContents = document.querySelectorAll('.year-content');

yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        yearButtons.forEach(btn => btn.classList.remove('active'));
        yearContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(`year-${button.dataset.year}`).classList.add('active');
    });
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});