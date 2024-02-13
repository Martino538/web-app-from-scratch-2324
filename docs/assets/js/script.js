// Fetch the user data from API

function fetchData() {
  const bestandPad = "https://martino538.github.io/web-app-from-scratch-2324/info.json";

  fetch(bestandPad)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Fout bij het ophalen van het bestand: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      setInterval(() => greetUser(data), 5000);
      getAuthorInfo(data);
    })
    .catch((error) => {
      console.error(
        "Er is een fout opgetreden bij het ophalen van het bestand:",
        error
      );
    });
}

// Random greeting word generator
function greetUser(data) {
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  const randomIndex = getRandomInt();
  const randomGreeting = data.greetings[randomIndex];

  const greetUser = document.getElementById("greeting-user");
  greetUser.textContent = "";
  greetUser.textContent = randomGreeting;
}

// Get and place all user data
function getAuthorInfo(data) {
  const authorFirstName = document.getElementById("author-firstName");
  const authorLastName = document.getElementById("author-lastName");
  const authorTruthsAndLiesList = document.getElementById("author-truthsAndLies");
  const authorAge = document.getElementById("author-age");
  const authorCity = document.getElementById("author-city");
  const authorStudy = document.getElementById("author-study");
  const authorJob = document.getElementById("author-job");
  const authorImg = document.getElementById("pageheader-img");
  const heroesList = document.getElementById("heroes-list");
  const villainList = document.getElementById("villain-list");

  authorFirstName.textContent = data.firstName;
  authorLastName.textContent = data.lastName;
  authorAge.textContent = data.age;
  authorCity.textContent = data.city;
  authorStudy.textContent = data.study;
  authorJob.textContent = data.job;
  authorImg.src = data.avatar_url;
  const truthsAndLies = data.authorTruthsAndLies;

  console.log(data.truthsAndLies);

  data.truthsAndLies.forEach((listItem) => {
    const list = document.createElement("ul");
    authorTruthsAndLiesList.appendChild(list);

    const li = document.createElement("li");
    li.textContent = listItem;
    list.appendChild(li);
  });

  data.topHeroes.forEach((hero) => {
    const li = document.createElement("li");
    li.textContent = hero;
    heroesList.appendChild(li);
  });

  data.topVillains.forEach((villain) => {
    const li = document.createElement("li");
    li.textContent = villain;
    villainList.appendChild(li);
  });
}

// Move text out of screen animation
function moveImageText() {
  const selectedItem = document.querySelector("body");
  selectedItem.classList.add("animating-header");
}

// Show hamburger menu on small screens
function hamburgerMenu() {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-item").forEach((item) => item.
  addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }));
}

// Set right section on navbar click
function toggleSectionActive() {
  const clickedNavItem = this;

  navItems.forEach((item) => {
    item.classList.remove("active-nav");
  });

  clickedNavItem.classList.add("active-nav");

  // setTimeout(() => {
  //   clickedNavItem.classList.add("active-nav");
  // }, 3000);

  const sectionId = clickedNavItem.dataset.sectionId;
  const section = document.getElementById(sectionId);
  if (section) {
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active-section");
    });
    section.classList.add("active-section");

    // setTimeout(() => {
    //   section.classList.add("active-section");
    // }, 3000);

  }
}



const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", toggleSectionActive);
});

fetchData();
hamburgerMenu();
