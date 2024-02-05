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
  })
  .catch((error) => {
    console.error(
      "Er is een fout opgetreden bij het ophalen van het bestand:",
      error
    );
  });
}

fetchData();


