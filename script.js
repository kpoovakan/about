"use strict";
window.onload = function() {
    document.getElementById("enableJavaScript").remove();
}

function pi() {
    alert(`
        First 25 digits of pi: 3.14159 2653589 7932384 626433
    `)
}

function division() {
    alert("Long division... I learned it a long time ago and it takes a very long time to do.");
}

function showLinks() {
    replace("music", "https://en.wikipedia.org/wiki/Dates_of_classical_music_eras");
    replace("butterfly", "https://en.wikipedia.org/wiki/%C3%89tude_Op._25,_No._9_(Chopin)");
    replace("turns", "https://www.google.com/search?q=chaine+turns+in+ballet");
    replace("pointe", "https://upload.wikimedia.org/wikipedia/commons/5/50/PointeShoes.jpg");
    replace("spot", "https://www.google.com/search?q=spotting+in+ballet");
    replace("pi", "https://www.piday.org/learn-about-pi/");
    document.getElementById("division").innerHTML = `<a href="javascript:void(0)" onclick="division()">long division</a>`;
    replace("frontEnd", "https://www.geeksforgeeks.org/blogs/frontend-vs-backend/");
    replace("esolang", "https://esolangs.org");
    replace("whitespace", "https://glenn-sun.github.io/learn-whitespace/");
    replace("chicken", "https://esolangs.org/wiki/Chicken");
}

function replace(id, link) {
    let words = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = `<a href="`+link+`" target="_blank">`+words+`</a>`;
}

function showGame(name) {
    document.getElementById(name).showModal();
    let nameFrame = name + "Frame";
    document.getElementById(nameFrame).style.display = "inline";
}

function hideGame(name) {
    document.getElementById(name).close();
    let nameFrame = name + "Frame";
    document.getElementById(nameFrame).style.display = "none";
}