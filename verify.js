// pin fill implementation in Progress
function moveForward(current, nextId) {
  if (current.value.length >= 1) {
      document.getElementById(nextId).focus();
      current.classList.add('active');
  } else{
    current.classList.remove('active');
  }
  checkAllFilled();
}

function moveBackward(event, prevId) {
  if (event.key === "Backspace" && event.target.value.length === 0) {
      document.getElementById(prevId).focus();
  }
  checkAllFilled();
}

function checkAllFilled() {
  const inputs = document.querySelectorAll("input[type='text']");
  const allFilled = Array.from(inputs).every(input => input.value.length >= 1);
  const button = document.querySelector('.button');

  if (allFilled) {
      button.classList.add('active');
  } else {
      button.classList.remove('active');
  }
}

// copyright
let date = new Date();
let year = date.getFullYear();
console.log(year);

const copyright = document.querySelectorAll('.copyright');
copyright.forEach(copyrights => {
  copyrights.textContent = year;
})