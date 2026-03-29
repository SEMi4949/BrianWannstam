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
document.querySelectorAll(".foldable-header").forEach(header => {
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
    });
});

