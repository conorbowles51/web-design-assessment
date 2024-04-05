const carousel = document.querySelector("#carousel");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("carousel-btn-next");
const prevBtn = document.getElementById("carousel-btn-prev");

// Keeps track of which slide we're on
let currentSlideIndex = 0;

// Changes slide by hiding every slide we're not currently on
const updateSlideIndex = (increment) => {
    currentSlideIndex += increment;

    slides.forEach((slide, i) => {
        if(i != (Math.abs(currentSlideIndex) % slides.length)){
            slide.style.display = "none";
        } else {
            slide.style.display = "block";
        }
    });
}

updateSlideIndex(0);

nextBtn.addEventListener("click", () => {
    updateSlideIndex(1);
});

prevBtn.addEventListener("click", () => {
    updateSlideIndex(-1);
})