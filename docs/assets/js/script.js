// Vervang 'jouw_bestand.json' door het pad naar jouw JSON-bestand

function fetchData() {
  const bestandPad = "https://martino538.github.io/web-app-from-scratch-2324/assets/dataset/dataset-Martijn.json";

  fetch(bestandPad)
  .then((response) => {
    // Controleer of het ophalen succesvol was (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Fout bij het ophalen van het bestand: ${response.status}`
      );
    }
    // Converteer de response naar JSON
    return response.json();
  })
  .then((data) => {
    // Verwerk de JSON-data hier
    console.log(data.avatar.url);
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
  greetUser.textContent = '';
  greetUser.textContent = randomGreeting;
}

// Get and place all user data
function getAuthorInfo(data) {
  const authorName = document.getElementById("author-name");
  const authorAge = document.getElementById("author-age");
  const authorCity = document.getElementById("author-city");
  const authorStudy = document.getElementById("author-study");
  const authorJob = document.getElementById("author-job");
  const authorImg = document.getElementById("pageheader-img");
  const heroesList = document.getElementById("heroes-list");
  const villainList = document.getElementById("villain-list");

  console.log(authorImg);
  
  authorName.textContent = data.name;
  authorAge.textContent = data.age;
  authorCity.textContent = data.city;
  authorStudy.textContent = data.study;
  authorJob.textContent = data.job;
  authorImg.src = data.avatar.url;

  data.top-5-heroes.forEach(hero => {
    const li = document.createElement("li");
    li.textContent(hero);
    console.log(li, heroesList);
    heroesList.appendChild(li);
  });
}

function moveImageText() {
  const selectedItem = document.querySelector('body');
  selectedItem.classList.add('animating-header');
}


  const animateBtn = document.getElementById('animate-btn');
  animateBtn.addEventListener("click", moveImageText);



fetchData();