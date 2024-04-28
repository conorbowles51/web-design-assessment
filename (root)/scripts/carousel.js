const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const imageDescription = document.getElementById("image-description");

const descriptions = [
    "Our bar offers a variety of drinks and a cozy atmosphere.",
    "Dine in our beautifully designed dining area that offers a comfortable dining experience.",
    "Our lunch room is perfect for casual dining and small gatherings.",
    "Meet our wonderful team who make everything possible!"
];

// Function to change slides and set description
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    // Set the description text
    imageDescription.textContent = descriptions[index];
};

// Adding event listeners to thumbnails for navigation
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showSlide(index);
    });
});

// Adding click event listeners to slides to show descriptions
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        imageDescription.textContent = descriptions[index]; // Display text when slide is clicked
    });
});

// Initialize the first slide to show
showSlide(0);
