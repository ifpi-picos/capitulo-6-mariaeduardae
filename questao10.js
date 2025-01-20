function solicitarNumero(mensagem) {
    const input = prompt(mensagem);
    return parseFloat(input);
  }
  
  function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
  }
  
  function exibirResultado(resultado) {
    alert("A média é: " + resultado);
  }
  
  const numero1 = solicitarNumero("Digite o primeiro número:");
  const numero2 = solicitarNumero("Digite o segundo número:");
  const media = calcularMedia(numero1, numero2);
  exibirResultado(media);
  