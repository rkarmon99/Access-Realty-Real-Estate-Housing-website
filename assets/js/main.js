/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);















/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }                                                    
  })
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(
  ".home__data, .home__img, .home__square, .home__content, .home__button, .home__social, .home__scroll",
  {
    origin: "left",
  }

  

)


sr.reveal(
  ".home__title , .about__container , .popular__container , .subscribe__container , .buyers__container , .sellers__container , .footer__container  "

);
sr.reveal(".home__description , .footer__info", { delay: 500 });
sr.reveal(".home__images", { delay: 800, origin: "bottom" });
sr.reveal(".values__images,.contact__content", { origin: left });
sr.reveal(".values__content , .contact__images", { origin: right });
sr.reveal(".footer__info", { origin: "bottom" });
sr.reveal(".footer__social", { origin: "bottom" });


document.querySelector('.inquiry-type-icon').addEventListener('click', function() {
  document.querySelector('.inquiry-type-dropdown').click();
});

const pollOptions = document.querySelectorAll(".option");
const resultsElement = document.getElementById("results");
let votes = { "red": 0, "green": 0, "blue": 0 };
pollOptions.forEach(option => {
  option.addEventListener("click", () => {
    const chosenOption = option.dataset.option;
    votes[chosenOption]++;
    updateResults();
  });
});
function updateResults() {
  let resultsText = "Current votes: ";
  for (const color in votes) {
    resultsText += `${color}: ${votes[color]}, `;
  }
  resultsText = resultsText.slice(0, -2); // Remove the trailing comma and space
  resultsElement.textContent = resultsText;
}


/*=============== CONTACT ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});