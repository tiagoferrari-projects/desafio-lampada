var lampada = window.document.getElementById('lampada')

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1
}

function Ligar() {
    if (!estaQuebrada()) {
        lampada.src = '/assets/img/lampada-ligada.svg'
    }
}

function Desligar() {
    if (!estaQuebrada()) {
        lampada.src = '/assets/img/lampada-desligada.svg'
    }
}

lampada.addEventListener('click', Quebrar)
function Quebrar() {
    lampada.src = '/assets/img/lampada-quebrada.svg'
}

