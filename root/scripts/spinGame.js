function spinWheel() {
    const email = document.getElementById('email').value.trim();  // Use trim to remove any whitespace
    if (!document.getElementById('promo').checked || !email) {
        alert('Please accept promotional emails and provide an email address to play.');
        return;
    }

    const prizes = ["10% Discount", "20% Discount", "Free Drink", "Free Dessert"];
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    const resultDiv = document.getElementById('result');  // Cache the result div
    resultDiv.textContent = `Congratulations! You won a ${prize}. Check your email for details.`; // no actual mail sent, as there is no db req 
}