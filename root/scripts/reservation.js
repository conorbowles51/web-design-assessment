document.getElementById('reservationForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(this);
    const name = formData.get('name').trim(); // Trimmed here for efficiency
    const phone = formData.get('phone').trim();
    const date = formData.get('date').trim();
    const time = formData.get('time').trim();
    const people = formData.get('people').trim();

    // Check if any of the required fields are empty
    if (!name || !phone || !date || !time || !people) { // Simplified check for empty fields
        document.getElementById('msg').innerHTML = "<span style='color: red;'>Please fill in all fields.</span>"; 
        return false; // Stop the form submission
    }
    
    // Prepare the confirmation message
    const confirmationMessage = `Reservation confirmed for ${people} people on ${date} at ${time}. We will contact you at ${phone}, ${name}.`;
    
    // Display the confirmation message on the page
    const msgDiv = document.getElementById('msg'); // Use a constant reference for the message div
    msgDiv.innerHTML = confirmationMessage;
    msgDiv.style.color = 'green'; // Set text color to green
	msgDiv.style.fontWeight = "bold";  // Set text weight to bold
    msgDiv.style.fontSize = '32px'; // Set font size to large
});