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
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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

let hemKnappMobil = document.getElementById('hem-mobil');
let omMigKnappMobil = document.getElementById('om-mig-mobil');
let prislistaKnappMobil = document.getElementById('prislista-mobil');
let galleriKnappMobil = document.getElementById('galleri-mobil');
let kontaktKnappMobil = document.getElementById('kontakt-mobil');

hemKnappMobil.addEventListener("click", kontrolleraHemKnapp);
omMigKnappMobil.addEventListener("click", kontrolleraOmMigKnapp);
prislistaKnappMobil.addEventListener("click", kontrolleraPrislistaKnapp);
galleriKnappMobil.addEventListener("click", kontrolleraGalleriKnapp);
kontaktKnappMobil.addEventListener("click", kontrolleraKontaktKnapp);

hemKnapp.addEventListener("click", kontrolleraHemKnapp);
omMigKnapp.addEventListener("click", kontrolleraOmMigKnapp);
prislistaKnapp.addEventListener("click", kontrolleraPrislistaKnapp);
galleriKnapp.addEventListener("click", kontrolleraGalleriKnapp);
kontaktKnapp.addEventListener("click", kontrolleraKontaktKnapp);
  
  
function kontrolleraHemKnapp() {
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




let dansBild = document.getElementById('dans');
  let massageBild = document.getElementById('massage');
  let måleriBild = document.getElementById('måleri');

  let dansText = document.getElementById('dansText');
  let massageText = document.getElementById('massageText');
  let målningText = document.getElementById('målningText');

  dansBild.addEventListener("mouseenter", dansBildText);
  massageBild.addEventListener("mouseenter", massageBildText);
  måleriBild.addEventListener("mouseenter", måleriBildText);


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