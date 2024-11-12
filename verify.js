const pinInputs = document.querySelectorAll('.pin-input');
let verifyBtn = document.getElementById('verifyBtn');

// Function to move focus to the next input
function moveToNextInput(currentInput, inputArray) {
  const currentIndex = Array.from(inputArray).indexOf(currentInput);
  if (currentInput.value !== '' && currentIndex < inputArray.length - 1) {
      inputArray[currentIndex + 1].focus();
  }
}

// Function to move focus to the previous input on backspace
function moveToPreviousInput(currentInput, inputArray) {
  const currentIndex = Array.from(inputArray).indexOf(currentInput);
  if (currentIndex > 0 && currentInput.value === '') {
      inputArray[currentIndex - 1].focus();
  }
}

// Function to check if all pin inputs are filled
function checkIfAllFilled() {
  let allFilled = true;
  pinInputs.forEach(input => {
      if (input.value === '') {
          allFilled = false;
      }
  });
  verifyBtn.disabled = !allFilled; // Enable button if all are filled
}

// Add event listeners to pin inputs
pinInputs.forEach(input => {
  input.addEventListener('input', (e) => {
      if (!/^[0-9]$/.test(e.target.value)) {
          e.target.value = ''; // Only allow digits
      }
      moveToNextInput(input, pinInputs);
      checkIfAllFilled(); // Check if all inputs are filled after each input
  });

  input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
          moveToPreviousInput(input, pinInputs);
          checkIfAllFilled(); // Recheck after backspace
      }
  });
});

// copyright
let date = new Date();
let year = date.getFullYear();
console.log(year);

const copyright = document.querySelectorAll('.copyright');
copyright.forEach(copyrights => {
  copyrights.textContent = year;
})