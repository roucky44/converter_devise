const key = '0fbe4279f9d4713bd23c8733'
const base_url = 'https://v6.exchangerate-api.com/v6/'

fetch(`${base_url}${key}/latest/EUR`)
    .then(response => response.json())
        .then(devise => {
            const resultat = document.querySelector('#resultat')
            devise.forEach(devise => {
                resultat.innerHTML += `<li> ${devise} : ${devise.conversion_rates.EUR} </li>`
            })
        })
    .catch(error => {
        console.error(error)
    })