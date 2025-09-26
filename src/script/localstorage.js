let montantValue = document.getElementById('montant')
let dateValue = new Date().toLocaleDateString()
let resultatValue = document.getElementById('result')
let cibleValue = document.getElementById('cible')
let deviseValue = document.getElementById('devise')


const form = document.querySelector('.converter')
const historique_p = document.querySelector('.historique_p p');


form.addEventListener("submit", (e) => {
    e.preventDefault()

    let historique = localStorage.getItem('historique')

    let total = { 
        date: dateValue,
        montant: montantValue.value,
        resultat: resultatValue.value,
        cible: cibleValue.value,
        devise: deviseValue.value
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
        historique_p.innerHTML += `- ${e.date} : ${e.montant} ${e.cible} = ${e.resultat} ${e.devise} <br/><br/>`;
    });

});


// AFFICHER EN REFRESH---------------------------------------------


let historiqueArray = JSON.parse(localStorage.getItem('historique'));

document.addEventListener('DOMContentLoaded', (e) => {
    let historique = localStorage.getItem('historique')

    if (historique == null){
        historique_p.innerHTML += `Aucun historique`;
    }

    else if (historique_p.innerHTML == '' && historique != null){
        historiqueArray.forEach(e => {
            historique_p.innerHTML += `- ${e.date} : ${e.montant} ${e.cible} = ${e.resultat} ${e.devise} <br/><br/>`;
        });
    }
})