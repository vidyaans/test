// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

const yearButtons = document.querySelectorAll('.year-btn');
const yearContents = document.querySelectorAll('.year-content');

// JavaScript untuk Menampilkan Section Visi dan Misi
window.onload = function () {
    const headers = document.querySelectorAll('.section-header');
    const contentCards = document.querySelectorAll('.content-card');

    setTimeout(() => {
        headers.forEach(header => {
            header.classList.add('visible');
        });
        contentCards.forEach(card => {
            card.classList.add('visible');
        });
    }, 500);
};

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});