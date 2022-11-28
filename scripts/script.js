console.log("hi");


var rodeKnoppen = document.querySelectorAll("article button");

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