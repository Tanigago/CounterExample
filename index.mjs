const buttonMasUno = document.querySelector("button");
const inputCasilla = document.querySelector("input");

function suma (event) {
    console.log("Has hecho click, muy bien");

    let resultadoSuma = inputCasilla.value;
    resultadoSuma++;
    inputCasilla.value = resultadoSuma;

    if (resultadoSuma === 11) {
        alert("Impresionante ¿verdad?");
    } if (resultadoSuma === 15) {
        alert("No hay nada más que ver.")
    }if (resultadoSuma === 20) {
        alert("En serio, ya está.")
    }if (resultadoSuma === 25) {
        alert("Vete ya, pesao.")
    }
}
buttonMasUno.addEventListener("click", suma);
