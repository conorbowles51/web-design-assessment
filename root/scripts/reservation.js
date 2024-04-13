document.getElementById('reservationForm').addEventListener('submit', function(event){
    event.preventDefault();
    var formData = new FormData(this);
    var name = formData.get('name');
    var phone = formData.get('phone');
    var date = formData.get('date');
    var time = formData.get('time');
    var people = formData.get('people');
    alert(`Reservation made for ${people} people on ${date} at ${time}. We will contact you at ${phone}, ${name}.`);
});
