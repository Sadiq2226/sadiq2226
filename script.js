const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')
const helloText = [
    "Hello!", // English
    "Hola!", // Spanish
    "Bonjour!", // French
    "Ciao!", // Italian
    "Hallo!", // German
    // Add more languages and greetings here
  ];
  
  const helloElement = document.querySelector('.hello');
  const content = document.querySelector('.content');
  
  let currentHelloIndex = 0;
  
  function changeHelloText() {
    helloElement.textContent = helloText[currentHelloIndex];
    currentHelloIndex = (currentHelloIndex + 1) % helloText.length; // Loop through greetings
  }
  
  setInterval(changeHelloText, 400); // Change greeting every 2 seconds
  
  window.onload = function() {
    // Simulate loading time (adjust as needed)
    setTimeout(function() {
      content.classList.add('loaded'); // Show content after loading
      document.body.classList.remove('loading'); // Remove loading styles
    }, 4500);
    
  }
  
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
