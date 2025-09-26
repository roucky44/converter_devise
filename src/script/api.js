const key = "0fbe4279f9d4713bd23c8733";
const base_url = "https://v6.exchangerate-api.com/v6/";

fetch(`${base_url}${key}/codes`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
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
  const montant = document.querySelector("#montant").value;
  const target = document.querySelector("#target").value;
  const result = document.querySelector("#result");

  await GET`${base_url}${key}/pair/${devise}/EUR/${target}${montant}`
    .then((response) => response.json())
    .then((data) => {
      result.value = data.conversion_result;
      innerHTML;
    })
    .catch((error) => {
      console.error(error);
    });
}

convert();

const montant = document.querySelector("#montant");

if ((montant.value = "")) {
  classlist.add("input-error");
  elseif(montant.value != 0);
  {
    classlist.remove("input-error");
  }
}
