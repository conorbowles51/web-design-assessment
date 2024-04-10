function spinWheel() {
    var email = document.getElementById('email').value;
    if (!document.getElementById('promo').checked || !email) {
        alert('Please accept promotional emails and provide an email address to play.');
        return;
    }

    var prizes = ["10% Discount", "20% Discount", "Free Drink", "Free Dessert", "No Prize"];
    var prize = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById('result').textContent = `Congratulations! You won a ${prize}. Check your email for details.`;
}
