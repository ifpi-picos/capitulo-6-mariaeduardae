
function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function jogoDeAdivinhacao(){
      
    const numeroSecreto = gerarNumeroSecreto();
    let tentativasRestantes = 10; 
  
    while (tentativasRestantes > 0) 
    }
      const palpite = prompt(`Você tem ${tentativasRestantes} tentativas restantes. Adivinhe o número (entre 1 e 100):`);
      const numeroPalpite = Number(palpite);
  
      if (numeroPalpite === numeroSecreto) {
        alert("Parabéns! Você adivinhou o número correto!");
        return;
      } else if (numeroPalpite < numeroSecreto) {
        alert("Seu palpite é menor que o número secreto.");
    }

  