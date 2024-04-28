function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
}

// Event listener 
document.addEventListener('DOMContentLoaded', function () {
    if(document.body.classList.contains("high-contrast")) {
        toggleHighContrast();  // Then toggle CSS class
    }
});