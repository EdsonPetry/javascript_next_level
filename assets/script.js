var h1 = document.querySelector('h1');
var button = document.querySelector('button');
var body = document.body;
var h3 = document.querySelector('h3');

// Create a variable that tracks if dark mode is active
var darkmodeActive = false;
var count = 5;


function setHeaderText() {
  h1.innerText = 'JS Next Level';
}


function toggleDarkMode(something) {
  something.stopPropagation();

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


function startCountdown() {
  var timer = setInterval(function () {
    count--;
    h3.innerText = 'Count: ' + count;

    // check count and if equal to zero, clear interval
    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// On page load initialize event listeners and run
// any functions that need to process when the page first loads
function init() {
  setHeaderText();
  startCountdown();
  button.addEventListener('click', toggleDarkMode);

  // var lis = document.querySelectorAll('li');

  // for (var li of lis) {

  //   li.addEventListener('click', function (eventObj) {
  //     // eventOjb.target or this
  //     console.log(this.innerText);
  //     // console.log(eventObj.target.textContent);
  //     // console.log('li clicked');
  //   });
  // }

  var ul = document.querySelector('ul');
  // var fruits = ['orange', 'apple', 'grape', 'kiwi', 'blueberry'];

  var peopleData = [
    {
      name: 'Jose',
      age: 24
    },
    {
      name: 'Natalie',
      age: 22
    }
  ];

  // console.log(peopleData);

  for (var i = 0; i < peopleData.length; i++) {
    var personObj = peopleData[i];

    var li = document.createElement('li');

    // Create an h3 and set it's text to personObj.name
    var h3 = document.createElement('h3');
    h3.innerText = 'Name: ' + personObj.name;
    li.append(h3);
    // Create a <p> and set it's text to personObj.age
    var p = document.createElement('p');
    p.innerText = 'Age: ' + personObj.age;
    li.append(p);

    ul.append(li);
  }

  // for (var fruit of fruits) {
  //   var li = document.createElement('li');
  //   li.innerText = fruit;

  //   li.dataset.fruitIndex = 0;

  //   ul.append(li);
  // }


  ul.addEventListener('click', function (eventObj) {
    var li = eventObj.target;
    console.log(li.dataset);
  });

  // var bubbleDiv = document.querySelector('.bubble');
  // bubbleDiv.addEventListener('click', function () {
  //   console.log('do I still work?');
  // });

  // var link = document.querySelector('#link');

  // link.addEventListener('click', function (obj) {
  //   obj.preventDefault();

  //   // window.location = 'https://github.com';
  //   console.log('wait! Link clicked');
  // });
}

// Initialize our app
init();