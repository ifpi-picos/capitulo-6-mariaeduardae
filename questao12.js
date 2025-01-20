
function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero!';
    }
    return a / b;
}

function exibirResultado(operacao, a, b) {
    let resultado;
    switch (operacao) {
        case 'adicionar':
            resultado = adicionar(a, b);
            break;
        case 'subtrair':
            resultado = subtrair(a, b);
            break;
        case 'multiplicar':
            resultado = multiplicar(a, b);
            break;
        case 'dividir':
            resultado = dividir(a, b);
            break;
        default:
            return 'Operação inválida!';
    }
    return `O resultado da operação ${operacao} entre ${a} e ${b} é: ${resultado}`;
}

console.log(exibirResultado('adicionar', 10, 5)); 
console.log(exibirResultado('subtrair', 10, 5)); 
console.log(exibirResultado('multiplicar', 10, 5)); 
console.log(exibirResultado('dividir', 10, 5)); 
console.log(exibirResultado('dividir', 10, 0)); 
