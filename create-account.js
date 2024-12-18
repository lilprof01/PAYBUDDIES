let submitButton = document.getElementById('submitBtn');
const pinInputs = document.querySelectorAll('.pin-input');

// function to check if required fields are filled
function checkIfAllFilled() {
  let allFilled = true;
  pinInputs.forEach(input => {
      if (input.hasAttribute('required') && input.value === '') {
          allFilled = false;
      }
  });
  submitButton.disabled = !allFilled;
}

pinInputs.forEach(input => {
    input.addEventListener('input', checkIfAllFilled);
});