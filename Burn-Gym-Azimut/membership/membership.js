//Responsive navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

//Add/remove active class function
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
