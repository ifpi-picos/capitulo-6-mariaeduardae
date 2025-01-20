function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        return "Você está com sobrepeso.";
    } else {
        return "Você está obeso.";
    }
}

function solicitarDadosECalcularIMC() {
    let peso = parseFloat(prompt("Digite o seu peso em kg:"));
    let altura = parseFloat(prompt)
}