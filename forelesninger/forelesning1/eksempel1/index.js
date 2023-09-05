
let form = document.getElementById("form");
let tekst = document.getElementById("text");
let result = document.getElementById("result");

form.onsubmit = () => {
    let value = tekst.value;
    result.innerHTML = value;
    return false;
}