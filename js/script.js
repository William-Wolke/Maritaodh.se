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

  hemKnapp.addEventListener("click", kontrolleraHemKnapp);
  omMigKnapp.addEventListener("click", kontrolleraOmMigKnapp);
  prislistaKnapp.addEventListener("click", kontrolleraPrislistaKnapp);
  galleriKnapp.addEventListener("click", kontrolleraGalleriKnapp);
  kontaktKnapp.addEventListener("click", kontrolleraKontaktKnapp);

  
function kontrolleraHemKnapp() {
    
}

function kontrolleraOmMigKnapp() {

}

function kontrolleraPrislistaKnapp() {

}

function kontrolleraGalleriKnapp() {

}

function kontrolleraKontaktKnapp() {

}