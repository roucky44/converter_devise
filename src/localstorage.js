// relier le fichier conversion.js au fichier localstorage.js

// JSAIS MEME PAS SI C BON

const date = localStorage.getItem("date");
const montant = localStorage.getItem("montant");
// let resultat = localStorage.getItem('resultat')

// besoin ?
// let cible = localStorage.getItem('resultat')
// let devise = localStorage.getItem('resultat')

let montantValue = document.getElementById("montant");
// let resultatValue = document.getElementById('resultat)
// let cibleValue = document.getElementById('resultat)
// let deviseValue = document.getElementById('resultat)

const form = document.querySelector(".converter");
const historique = document.querySelector(".historique-div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("date", date);
  // faire ddd/mmm/yyy

  localStorage.setItem("montant", montantValue.value);
  // localStorage.setItem('cible', cibleValue.value)
  // localStorage.setItem('devise', deviseValue.value)
  // localStorage.setItem('resulat', resultatValue.value)

  // but de prendre la value du resultat de la conversion de conversion .js

  let p = document.createElement("p");
  p.innerHTML = `${date} : ${montantValue.value} eur = jsp usd`; // ${cible} = ${resultat} ${desive}
  historique.appendChild(p);
});
