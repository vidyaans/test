// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript Hero Section untuk Ganti Slide
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;11
}

// Ganti Slide Setai 5 Detik
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

let slideInterval = setInterval(autoSlide, 5000);

// JavaScript Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      setTimeout(() => {
        bar.style.width = percentage + '%';
      }, 500);
    });
});

// JQuery untuk Mengarahkan Button ke Section News
$(document).ready(function() {
    $(".scroll-to-news").click(function(event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $(".news").offset().top
        }, 500);
    });
});

// Penyesuaian Dot di Navigasi
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(i);
        currentIndex = i;
        slideInterval = setInterval(autoSlide, 3000);
    });
});

// JQuery untuk Button Filter News
$(document).ready(function() {
    $(".select").click(function() {
        let filter = $(this).attr("data-filter");

        if (filter === "semua") {
            $(".news-item").show(500);
        } else {
            $(".news-item").not("." + filter).hide(500);
            $(".news-item").filter("." + filter).show(500);
        }

        $(this).addClass("active").siblings().removeClass("active");
    });
});

// JavaScript Koleksi Section untuk Mengarahkan ke Slide Selanjutnya
const carouselItems = document.querySelector('.event-slider-items');
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');

let offset = 0;

prevButton.addEventListener('click', () => {
  const itemWidth = carouselItems.children[0].offsetWidth + 20;
  offset = Math.min(offset + itemWidth, 0);
  carouselItems.style.transform = `translateX(${offset}px)`;
});

nextButton.addEventListener('click', () => {
  const itemWidth = carouselItems.children[0].offsetWidth + 20;
  const maxOffset = -(carouselItems.scrollWidth - carouselItems.offsetWidth);
  offset = Math.max(offset - itemWidth, maxOffset);
  carouselItems.style.transform = `translateX(${offset}px)`;
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});