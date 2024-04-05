const carousel = document.querySelector("#carousel");
if(!carousel) {
    console.log("Invalid carousel selector");
}

const slides = document.querySelectorAll(".slide");
if(slides.length <= 0) {
    console.log("Invalid slides selector");
}

const nextBtn = document.getElementById("carousel-btn-next");
const prevBtn = document.getElementById("carousel-btn-prev");

let currentSlideIndex = 0;

const updateSlideIndex = (increment) => {
    currentSlideIndex += increment;

    slides.forEach((slide, i) => {
        if(i != (currentSlideIndex % slides.length)){
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