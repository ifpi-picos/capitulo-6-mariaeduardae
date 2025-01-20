
function calcularMedia(num1, num2, num3) {

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    const numero3 = parseFloat(num3);
    
    const soma = numero1 + numero2 + numero3;
    
    const media = Math.round((soma / 3) * 100) / 100;
    
    console.log(`A média dos três números é: ${media}`);
    
    return media;
}

const numero1 = 7.5;
const numero2 = 8.25;
const numero3 = 9.0;

calcularMedia(numero1, numero2, numero3);
