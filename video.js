// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// Menentukan Jumlah Galeri per Halaman
const imagesPerPage = 6;
let currentPage = 1;

// Mengambil Item Galeri
const galleryItems = document.querySelectorAll('.gallery-item');
const totalImages = galleryItems.length;
const totalPages = Math.ceil(totalImages / imagesPerPage);

// JavaScript Menampilkan Halaman Galeri
function displayPage(page) {
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    // Menyembunyikan Gambar
    galleryItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    updatePagination(page);
}

// JavaScript Tombol Pagination
function updatePagination(page) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    // Tombol Previous
    const prevButton = document.createElement('li');
    prevButton.classList.add('page-item');
    prevButton.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });
    paginationContainer.appendChild(prevButton);

    // Tombol Halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        if (i === page) {
            pageButton.classList.add('active');
        }
        pageButton.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayPage(currentPage);
        });
        paginationContainer.appendChild(pageButton);
    }

    // Tombol Next
    const nextButton = document.createElement('li');
    nextButton.classList.add('page-item');
    nextButton.innerHTML = `<a class="page-link" href="#">Next</a>`;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Menampilkan Halaman Pertama
displayPage(currentPage);

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});