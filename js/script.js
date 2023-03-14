var h1 = document.querySelector('h1');
var button = document.querySelector('button');
var body = document.body;
// Create a variable that tracks if dark mode is active
var darkmodeActive = false;
var h3 = document.querySelector('h3');
var count = 5;

function setHeaderText() {
  h1.innerText = 'JS Next Level';
}


function toggleDarkMode() {
  if (darkmodeActive === false) {
    // Switch to dark mode
    body.classList.add('darkmode');
    button.innerText = 'Light Mode';
    darkmodeActive = true;
  } else {
    // Switch to light mode
    body.classList.remove('darkmode');
    button.innerText = 'Dark Mode';
    darkmodeActive = false;
  }
}

function colorBlast() {
  body.classList.add('splash');
}

function countdown() {
  var timer = setInterval(function () {
    count--;
    h3.innerText = 'Count: ' + count;

    // check count and if equal to zero, clear interval
    if (count === 0) {
      clearInterval(timer);
      colorBlast();
    }
  }, 1000);
}

// On page load initialize event listeners and run
// any functions that need to process when the page first loads
function init() {
  setHeaderText();
  countdown();
  button.addEventListener('click', toggleDarkMode);
}

// Initialize our app
init();