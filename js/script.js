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

  let hem = document.getElementById('hem-sektion');
  let omMig = document.getElementById('om-mig-sektion');
  let prislista = document.getElementById('prislista-sektion');
  let galleri = document.getElementById('galleri-sektion');
  let kontakt = document.getElementById('kontakt-sektion');

  hemKnapp.addEventListener("click", kontrolleraHemKnapp);
  omMigKnapp.addEventListener("click", kontrolleraOmMigKnapp);
  prislistaKnapp.addEventListener("click", kontrolleraPrislistaKnapp);
  galleriKnapp.addEventListener("click", kontrolleraGalleriKnapp);
  kontaktKnapp.addEventListener("click", kontrolleraKontaktKnapp);

  
function kontrolleraHemKnapp() {
    console
    hem.style.display = "block";
    omMig.style.display = "none";
    prislista.style.display = "none";
    galleri.style.display = "none";
    kontakt.style.display = "none";
}

function kontrolleraOmMigKnapp() {
    hem.style.display = "none";
    omMig.style.display = "block";
    prislista.style.display = "none";
    galleri.style.display = "none";
    kontakt.style.display = "none";
}

function kontrolleraPrislistaKnapp() {
    hem.style.display = "none";
    omMig.style.display = "none";
    prislista.style.display = "block";
    galleri.style.display = "none";
    kontakt.style.display = "none";
}

function kontrolleraGalleriKnapp() {
    hem.style.display = "none";
    omMig.style.display = "block";
    prislista.style.display = "block";
    galleri.style.display = "block";
    kontakt.style.display = "block";
}

function kontrolleraKontaktKnapp() {
    hem.style.display = "none";
    omMig.style.display = "block";
    prislista.style.display = "block";
    galleri.style.display = "block";
    kontakt.style.display = "block";
}