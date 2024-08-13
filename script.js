// Select the navigation bar
const navbar = document.querySelector('.navbar');

// Function to change navbar background color on scroll
window.onscroll = function() {
    if (window.scrollY > 50) { // Change this value to control when the background color changes
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Add event listeners to the menu items for hover effects
const menuItems = document.querySelectorAll('.navbar ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('hovered');
    });
});


// Add event listener for scrolling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add event listener for hovering
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#3498db';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});


// Add event listener for scrolling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add smooth scrolling to section links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Section reveal on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});



