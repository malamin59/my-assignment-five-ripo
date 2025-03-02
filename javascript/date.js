const dateInput = document.getElementById('dateInput');

// To log the selected date
dateInput.addEventListener('change', function() {
  console.log('Selected date: ' + dateInput.value);
});