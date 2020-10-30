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
let myLinks = document.getElementById('myLinks');
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
    myLinks.style.display = "none";
}

function kontrolleraOmMigKnapp() {
    hem.style.display = "none";
    omMig.style.display = "block";
    prislista.style.display = "none";
    galleri.style.display = "none";
    kontakt.style.display = "none";
    myLinks.style.display = "none";
}

function kontrolleraPrislistaKnapp() {
    hem.style.display = "none";
    omMig.style.display = "none";
    prislista.style.display = "block";
    galleri.style.display = "none";
    kontakt.style.display = "none";
    myLinks.style.display = "none";
}

function kontrolleraGalleriKnapp() {
    hem.style.display = "none";
    omMig.style.display = "none";
    prislista.style.display = "none";
    galleri.style.display = "block";
    kontakt.style.display = "none";
    myLinks.style.display = "none";
}

function kontrolleraKontaktKnapp() {
    hem.style.display = "none";
    omMig.style.display = "none";
    prislista.style.display = "none";
    galleri.style.display = "none";
    kontakt.style.display = "block";
    myLinks.style.display = "none";
}




const modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("bild-1");
let img2 = document.getElementById("bild-2");






let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");



img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
