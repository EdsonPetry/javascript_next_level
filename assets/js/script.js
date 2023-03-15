let h1 = document.querySelector('h1')
let button = document.querySelector('button')
let body = document.body
let darkModeOn = false

h1.innerText = "JS next level"
// Toggle between light mode and dark
// Create a variable that tracks if dark mode is active
// If variable is true, switch to light else switch to dark
function setHeaderText() {
    h1.innerText
}
function toggleDarkMode() {
    if (darkModeOn === false) {
        // Switch to light mode
        body.classList.add('darkMode')
        button.innerText = ('Light Mode')
        darkModeOn = true
    } else {
        body.classList.remove('darkMode')
        button.innerText = ('Dark Mode')
        darkModeOn = false
    }
}



let h3 = document.querySelector('h3')
let count = 10

let timer = setInterval(function () {
    count--
    h3.innerText = 'Count:  ' + count

    // Check count and if == 0 clear interval
    if (count === 0) {
        clearInterval(timer)
        alert('Times up!')
    }
}, 1000)

function init() {
    setHeaderText()
    
}
button.addEventListener('click', toggleDarkMode)



