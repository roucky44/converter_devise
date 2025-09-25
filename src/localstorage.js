let montantValue = document.getElementById('montant')
let dateValue = new Date().toLocaleDateString()
// let resultatValue = document.getElementById('resultat)
// let cibleValue = document.getElementById('cible)
// let deviseValue = document.getElementById('devise)


const form = document.getElementById('form')
const precedent = document.getElementById('historique')
const historique_p = document.querySelector('#historique p');


form.addEventListener("submit", (e) => {
    e.preventDefault()

    let historique = localStorage.getItem('historique')

    let total = { 
        date: dateValue,
        montant: montantValue.value,
        // cible: cibleValue.value
        // devise: deviseValue.value
    }

    // console.log('historique', historique)
    if(historique == null){
        let totalDATA = JSON.stringify([total])
        localStorage.setItem('historique', totalDATA)

    } else {
        let array = JSON.parse(historique)
        // console.log('array', array)
        array.push(total)
        let totalDATA = JSON.stringify(array)
        localStorage.setItem('historique', totalDATA)
        // console.log('totalDATA', totalDATA)
    }

    // but de prendre la value du resultat de la conversion de conversion .js

    let historiqueArray = JSON.parse(localStorage.getItem('historique'));
    // console.log(historiqueArray)


    historique_p.innerHTML = ''
    historiqueArray.forEach(e => { 
        let eDate = e.date
        let eMontant = e.montant
        historique_p.innerHTML += `${eDate} : ${eMontant} <br/>`;
    });

});

// AFFICHER EN REFRESH---------------------------------------------


let historiqueArray = JSON.parse(localStorage.getItem('historique'));

document.addEventListener('DOMContentLoaded', () => {
    let historique = localStorage.getItem('historique')
    let eDate 
    let eMontant

    if (historique == null){
        historique_p.innerHTML += `Aucun historique`;
    }

    else if (historique_p.innerHTML == '' && historique != null){
        historiqueArray.forEach(e => {
            eDate = e.date
            eMontant = e.montant
            historique_p.innerHTML += `${eDate} : ${eMontant} <br/>`;
        });
    }
})