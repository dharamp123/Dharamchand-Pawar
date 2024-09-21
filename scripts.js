 AOS.init({
    duration: 1200,
    once: true, // Animation will only happen once
  });
  AOS.init({
    duration: 1200,  // Animation duration
    once: false,     // Allows the animation to be triggered again when scrolling up
    mirror: true     // Reverse the animation when scrolling back
  });
  

  // Toggle the Sidebar Menu
  function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }

  // Show selected section and hide others
  function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    // Optionally close the sidebar after clicking
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
  }

  // On window load, only show the home section
  window.onload = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('header').classList.remove('hidden'); // Show header initially
  };


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
  
        // Smooth Scroll
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  
// JavaScript for moving the background on scroll
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
  
    // Adjust the background position based on scroll
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; // 0.5 controls speed (adjustable)
  });
  