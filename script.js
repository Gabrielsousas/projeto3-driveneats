let botaoRefeicao, refeicao, preco1;

function selecionarPrato(prato) {
  const clearSelection = document.querySelector(".refeições .selecionado");

  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  prato.classList.add("selecionado");
  botaoRefeicao = prato.innerHTML;
  refeicao = prato.querySelector('h2');
  preco1 = prato.querySelector("h4");
  console.log(refeicao);
  console.log(preco1);
  verificaPreenchimento();
}

let botaoBeBida, bebida, preco2;

function selecionarBebida(botaoThisBebida) {
  const clearSelection = document.querySelector(".bebidas .selecionado");
  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  botaoThisBebida.classList.add("selecionado");
  botaoBeBida = botaoThisBebida.innerHTML;
  bebida = botaoThisBebida.querySelector("h2");
  preco2 = botaoThisBebida.querySelector("h4");
  console.log(bebida);
  console.log(preco2);
  verificaPreenchimento();
}

let botaoSobremesa, sobremesa, preco3;

function selecionarSobremesa(botaoThisSobremesa) {
  const clearSelection = document.querySelector(".sobremesas .selecionado");
  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  botaoThisSobremesa.classList.add("selecionado");
  botaoSobremesa = botaoThisSobremesa.innerHTML;
  sobremesa = botaoThisSobremesa.querySelector("h2");
  preco3 = botaoThisSobremesa.querySelector("h4");
  console.log(sobremesa);
  console.log(preco3);
  verificaPreenchimento();
}

function verificaPreenchimento() {
  if (botaoRefeicao !== undefined) {
    if (botaoBeBida !== undefined) {
      if (botaoSobremesa !== undefined) {
        const habilitarButton = document.querySelector(".fechar-pedido");
        habilitarButton.removeAttribute("disabled");
        habilitarButton.innerHTML = "Finalizar Pedido";
        habilitarButton.classList.add("button-selecionado");
        trocarNomes();
      }
    }
  }
}


function trocarNomes(){
  const nomeRefeicao = document.querySelector(".nome-refeicao");
  nomeRefeicao.innerHTML = refeicao.innerHTML;
  const valorRefeicao = document.querySelector(".valor-refeicao");
  valorRefeicao.innerHTML = preco1.innerHTML;

  const nomeBebida = document.querySelector(".nome-bebida");
  nomeBebida.innerHTML = bebida.innerHTML;
  const valorBebida = document.querySelector(".valor-bebida");
  valorBebida.innerHTML = preco2.innerHTML;

  const nomeSobremesa = document.querySelector(".nome-sobremesa");
  nomeSobremesa.innerHTML = sobremesa.innerHTML;
  const valorSobremesa = document.querySelector(".valor-sobremesa");
  valorSobremesa.innerHTML = preco3.innerHTML;

  const valorTotal = document.querySelector(".valor-total");
  valorTotal = parseInt(preco1) + parseInt(preco2) + parseInt(preco3)

}


function fecharPedido() {
  document.querySelector(".confirmar-compra").classList.remove("escondido");
  document.querySelector(".conteudo-total").classList.add("opaco");
  exibirValorFinal()
}

function exibirValorFinal(){
  const precoFinal = (preco1 + preco2 + preco3);
  console.log(precoFinal);
}


function whatsapp(){
  const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${refeicao.innerHTML}\n- Bebida: ${bebida.innerHTML}\n- Sobremesa: ${sobremesa.innerHTML}\nTotal: R$ 27,70\nNome: Fulano\nEndereço: Rua...`; 
  const URI = `https://wa.me/5521983767744?text=" ${mensagem}`; 
  const encodedURI = encodeURI(URI)
  window.open(encodedURI)
}



function cancelar(buttonCancelar){
  document.querySelector(".confirmar-compra").classList.add("escondido");
}