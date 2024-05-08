// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent += currentYear;
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    function scrollToSection(section) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: section.offsetTop
        });
    }

    // Image Slider
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll("#slider img");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Filter portfolio items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterItems(filter);
        });
    });

    function filterItems(filter) {
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }
});
