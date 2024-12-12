// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const paginationContainer = document.querySelector('.pagination');
const itemsPerPage = 9;
let currentIndex = 1;

// JavaScript Menampilkan Modal dengan Foto dan Deskripsi
function showImage() {
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    modalImage.src = img.src;
    modalDescription.innerText = item.querySelector('.description').innerText;
}

// JavaScript Button
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImage.src = img.src;
        modalDescription.innerText = item.querySelector('.description').innerText;
        currentIndex = index;
        modal.show();
    });
});

// JavaScript Menampilkan Halaman Galeri
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    galleryItems.forEach((item, index) => {
        item.style.display = index >= start && index < end ? "block" : "none";
    });

    document.querySelectorAll('.pagination .page-item').forEach((el, index) => {
        if (index === page) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// JavaScript Tombol Pagination
function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';

    // Tombol Previous
    const prevLi = document.createElement('li');
    prevLi.classList.add('page-item');
    prevLi.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prevLi.addEventListener('click', () => {
        const currentPage = parseInt(document.querySelector('.pagination .page-item.active a').textContent);
        if (currentPage > 1) showPage(currentPage - 1);
    });
    paginationContainer.appendChild(prevLi);

    // Tombol Halaman
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === 1) li.classList.add('active');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', (event) => {
            event.preventDefault();
            showPage(i);
        });
        paginationContainer.appendChild(li);
    }

    // Tombol Next
    const nextLi = document.createElement('li');
    nextLi.classList.add('page-item');
    nextLi.innerHTML = `<a class="page-link" href="#">Next</a>`;
    nextLi.addEventListener('click', () => {
        const currentPage = parseInt(document.querySelector('.pagination .page-item.active a').textContent);
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
    paginationContainer.appendChild(nextLi);
}

// JavaScript Menghitung Halaman
const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
renderPagination(totalPages);

// Menampilkan Halaman Pertama
showPage(1);

// JavaScript Tombol Navigasi di Modal
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    showImage();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    showImage();
});

// JavaScript Navigasi dengan Keyboard
document.addEventListener("keydown", (event) => {
    if (document.querySelector('.modal.show')) {
        if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showImage();
        } else if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showImage();
        } else if (event.key === "Escape") {
            modal.hide();
        }
    }
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});