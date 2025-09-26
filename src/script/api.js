const key = "0fbe4279f9d4713bd23c8733";
const base_url = "https://v6.exchangerate-api.com/v6/";

function convertirDevise(a, b) {
  let resultat = a * b;
  return resultat;
}

fetch(`${base_url}${key}/codes`)
  .then((response) => response.json())
  .then((data) => {
    const codes = data.supported_codes;

    let options = "";
    codes.forEach((code) => {
      options += `<option value="${code[0]}">${code[0]} - ${code[1]}</option>`;
    });

    document.querySelector("#cible").innerHTML = options;
    document.querySelector("#devise").innerHTML = options;
  });

async function convert() {
  const devise = document.querySelector("#devise").value;
  const montant = Number(document.querySelector("#montant").value);
  const cible = document.querySelector("#cible").value;
  const result = document.querySelector("#result");

  if (!montant || montant <= 0) {
    document.querySelector("#montant").classList.add("input-error");
    result.value = "Montant invalide";
    return;
  } else {
    document.querySelector("#montant").classList.remove("input-error");
  }

  try {
    const response = await fetch(`${base_url}${key}/pair/${devise}/${cible}`);
    const data = await response.json();

    if (data.conversion_rate) {
      const valeurConvertie = convertirDevise(montant, data.conversion_rate);
      result.value = valeurConvertie;
      console.log(valeurConvertie);
    } else {
      result.value = "Erreur de conversion";
    }
  } catch (error) {
    console.error(error);
    result.value = "Erreur API";
  }
}

document.querySelector(".submit-input").addEventListener("click", convert);
