// Vervang 'jouw_bestand.json' door het pad naar jouw JSON-bestand
const bestandPad = "./assets/dataset/dataset-Martijn.json";

function fetchData() {
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
    console.log(data);
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

  authorName.textContent = data.name;
  authorAge.textContent = data.age;
  authorCity.textContent = data.city;
  authorStudy.textContent = data.study;
  authorJob.textContent = data.job;
}

function rotateScrollButton() {
  const scrollText = document.getElementById('scroll-text');
  scrollText.innerHTML = scrollText.innerText.split("").map(
    (char, i) =>
    '<span style="transform:rotate('+ i * 8.2 +'deg)">'+ char +'</span>'
  ).join("");
}

fetchData();
rotateScrollButton();