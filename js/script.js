// You can add interactive features here, like form validation, smooth scrolling, etc.

// Example of smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('theme-toggle').addEventListener('click', function() 
{
   document.querySelectorAll('.midpart section').forEach(s => s.classList.toggle('dark-theme'));
      document.querySelectorAll('.midpart').forEach(s => s.classList.toggle('dark-theme'));
    // targetSection.classList.toggle('light-theme');
});