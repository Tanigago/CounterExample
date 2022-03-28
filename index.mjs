const buttonMasUno = document.querySelector("button");
const inputCasilla = document.querySelector("input");

function suma (event) {
    console.log("Has hecho click, muy bien");

    let resultadoSuma = inputCasilla.value;
    resultadoSuma++;
    inputCasilla.value = resultadoSuma;
}
buttonMasUno.addEventListener("click", suma);
