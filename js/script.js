// Initialize and add the map
function initMap() {
    // The location of Uluru
    let uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: uluru, map: map});
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
  
  let dansBild = document.getElementById('dans');
  let massageBild = document.getElementById('massage');
  let måleriBild = document.getElementById('måleri');

  let dansText = document.getElementById('dansText');
  let massageText = document.getElementById('massageText');
  let målningText = document.getElementById('målningText');

  dansBild.addEventListener("mouseenter", dansBildText);
  massageBild.addEventListener("mouseenter", massageBildText);
  måleriBild.addEventListener("mouseenter", måleriBildText);
  
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
    omMig.style.display = "none";
    prislista.style.display = "none";
    galleri.style.display = "block";
    kontakt.style.display = "none";
}

function kontrolleraKontaktKnapp() {
    hem.style.display = "none";
    omMig.style.display = "none";
    prislista.style.display = "none";
    galleri.style.display = "none";
    kontakt.style.display = "block";
}

function dansBildText () {

}

function massageBildText () {

}

function måleriBildText () {

}



let gallery = document.querySelector('#gallery');
let getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
let getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
let resizeAll = function () {
    let altura = getVal(gallery, 'grid-auto-rows');
    let gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        let el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            let altura = getVal(gallery, 'grid-auto-rows');
            let gap = getVal(gallery, 'grid-row-gap');
            let gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});

window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});

galleriKnapp.addEventListener("click", resizeAll);