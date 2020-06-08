// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

  let hemKnapp = document.getElementById('hem');
  let omMigKnapp = document.getElementById('om-mig');
  let prislistaKnapp = document.getElementById('prislista');
  let galleriKnapp = document.getElementById('galleri');
  let kontaktKnapp = document.getElementById('kontakt');

  let hem = document.getElementById('hem-section');
  let omMig = document.getElementById('om-mig-sektion');
  let prislista = document.getElementById('prislista-sektion');
  let galleriSektion = document.getElementById('galleri-sektion');
  let kontaktSektion = document.getElementById('kontakt-sektion');

  hemKnapp.addEventListener("click", kontrolleraHemKnapp);
  omMigKnapp.addEventListener("click", kontrolleraOmMigKnapp);
  prislistaKnapp.addEventListener("click", kontrolleraPrislistaKnapp);
  galleriKnapp.addEventListener("click", kontrolleraGalleriKnapp);
  kontaktKnapp.addEventListener("click", kontrolleraKontaktKnapp);

  
function kontrolleraHemKnapp() {
    hemSektion.style.display = "none";
    omMigSektion.style.display = "none";
    prislistaSektion.style.display = "none";
    galleriSektion.style.display = "none";
    kontaktSektion.style.display = "none";
}

function kontrolleraOmMigKnapp() {
    hemSektion.style.display = "none";
    omMigSektion.style.display = "block";
    prislistaSektion.style.display = "block";
    galleriSektion.style.display = "block";
    kontaktSektion.style.display = "block";
}

function kontrolleraPrislistaKnapp() {
    hemSektion.style.display = "none";
    omMigSektion.style.display = "block";
    prislistaSektion.style.display = "block";
    galleriSektion.style.display = "block";
    kontaktSektion.style.display = "block";
}

function kontrolleraGalleriKnapp() {
    hemSektion.style.display = "none";
    omMigSektion.style.display = "block";
    prislistaSektion.style.display = "block";
    galleriSektion.style.display = "block";
    kontaktSektion.style.display = "block";
}

function kontrolleraKontaktKnapp() {
    hemSektion.style.display = "none";
    omMigSektion.style.display = "block";
    prislistaSektion.style.display = "block";
    galleriSektion.style.display = "block";
    kontaktSektion.style.display = "block";
}