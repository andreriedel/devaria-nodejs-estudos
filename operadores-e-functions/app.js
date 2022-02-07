const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const validarNumeroInformado = numero => {
  const resultado =  Number.parseFloat(numero)    
  
  if (!resultado) {
    console.log('numero informado nao e valido');
  }

  return resultado
}

const validarOperador = operador => {
  switch (operador) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return operador;
    default:
      console.log('Operador informado e invalido');
      return false;
  }
}

readLine.question('Favor informar um numero: ', numero1 => {
  const numeroValidado1 = validarNumeroInformado(numero1);

  if (numeroValidado1) {
    readLine.question('Favor informar outro numero: ', numero2 => {
      const numeroValidado2 = validarNumeroInformado(numero2);

      if (numeroValidado2) {
        readLine.question('Favor informar o operador: ', operador => {
          const operadorValidado = validarOperador(operador);

          if (operadorValidado) {
            switch (operadorValidado) {
              case '+':
                console.log(`Operador de adicao selecionado, ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                break;
              case '-':
                console.log(`Operador de subtracao selecionado, ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                break;
              case '*':
                console.log(`Operador de multiplicacao selecionado, ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                break;
              case '/':
                console.log(`Operador de divisao selecionado, ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                break;
              case '%':
                console.log(`Operador de modulo selecionado, ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                break;
            }
          }
        })
      }
    })
  }
})
