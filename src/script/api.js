const key = '0fbe4279f9d4713bd23c8733'
const base_url = 'https://v6.exchangerate-api.com/v6/'

fetch(`${base_url}${key}`)
    .then(response => response.json())
        .then(chats => {
            const resultat = document.querySelector('#resultat')
            chats.forEach(chat => {
                resultat.innerHTML += `<img src="${chat.url}" alt="Chat">`
            })
        })
    .catch(error => {
        console.error(error)
    })