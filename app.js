let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numerGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el número esta incluido en la lista
        if (listaNumeroSorteados.includes(numerGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumeroSorteados.push(numerGenerado);
            return numerGenerado;
        }
    }


}

function mensajesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja()
    //inidicar mensaje de intervalo
    mensajesIniciales()
    //Generar numero aleatorio

    //Inicializar el numero de intentos
    //Deshabilitar el botón de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
mensajesIniciales()