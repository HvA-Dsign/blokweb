console.log("pinterest");


var rodeKnoppen = document.querySelectorAll("article button");
var zoekIcoon = document.querySelector("nav ul li label");
var zoekbalk = document.querySelector("form");


rodeKnoppen.forEach(knop => {
    console.log(knop);
    knop.addEventListener("click", maakKnopZwart);
});


function maakKnopZwart(event) {
    // aanspreken van de button door event te gebruiken
    event.target.classList.toggle('anders');
    // kijken of de class anders bevat
    if (event.target.classList.contains('anders')) {
        event.target.innerHTML = "Bewaard";
    }
    // niet anders
    else {
        event.target.innerHTML = "Bewaren";
        console.log(event);
    }
}

// zoekbalk tonen bij klein scherm als je klikt op het icoon
zoekIcoon.addEventListener("click", toonZoekbalk);

function toonZoekbalk() {
    zoekbalk.classList.toggle('tonenVanZoekbalk');
}