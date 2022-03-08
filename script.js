function Converter() {
    var valor = document.getElementById("valor").value;
    var valorSelect = document.getElementById("moedas");
  
    if (valor == 0) {
      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = " Preencha o valor para converter";
      elementoValorConvertido.innerHTML = valorConvertido;
      return;
    }
    var valorConvertido = parseFloat(valor);
    var opcaoSelecionada = valorSelect.value;
  
    if (opcaoSelecionada == "dolar") {
      var valorEmReal = valorConvertido * 5.08;
      console.log(valorEmReal);
    } else if (opcaoSelecionada == "euro") {
      var valorEmReal = valorConvertido * 5.54;
      console.log(valorEmReal);
    } else if (opcaoSelecionada == "libra") {
      var valorEmReal = valorConvertido * 6.68;
      console.log(valorEmReal);
    } else if (opcaoSelecionada == "bitcoin") {
      var valorEmReal = valorConvertido * 195458.08;
      console.log(valorEmReal);
    } else {
      var valorEmReal = 0.0;
      console.log(valorEmReal);
    }
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " o resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  