function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


//DESKTOP
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

//MOBIL
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


let hem = document.getElementById('hem-sektion');
let omMig = document.getElementById('om-mig-sektion');
let prislista = document.getElementById('prislista-sektion');
let galleri = document.getElementById('galleri-sektion');
let kontakt = document.getElementById('kontakt-sektion');



  
function kontrolleraHemKnapp() {
    console.log("Hej");
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


//Kod för bildgalleriet

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
//Utan denna line funkar inte galleriet korrekt
galleriKnapp.addEventListener("click", resizeAll);
galleriKnappMobil.addEventListener("click", resizeAll);











// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("gallery-item");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

img.addEventListener("click", display);

function display () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}