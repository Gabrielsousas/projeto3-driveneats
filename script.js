let botaoRefeicao;

function selecionarPrato (botaoThis){
    const botaoSelecionadoAnteriormente1 = document.querySelector('.refeições .selecionado', );
    if (botaoSelecionadoAnteriormente1 !== null){
        botaoSelecionadoAnteriormente1.classList.remove('selecionado')
    }
    botaoThis.classList.add('selecionado');
    botaoRefeicao = botaoThis.innerHTML;
    verificaPreenchimento ()
}

let botaoBeBida;

function selecionarBebida (botaoThisBebida){
    const botaoSelecionadoAnteriormente = document.querySelector('.bebidas .selecionado');
    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    botaoThisBebida.classList.add('selecionado');
    botaoBeBida = botaoThisBebida.innerHTML;
    verificaPreenchimento ()
}

let botaoSobremesa;

function selecionarSobremesa (botaoThisSobremesa){
    const botaoSelecionadoAnteriormente = document.querySelector('.sobremesas .selecionado');
    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    botaoThisSobremesa.classList.add('selecionado');
    botaoSobremesa = botaoThisSobremesa.innerHTML;
    verificaPreenchimento ()
}

function verificaPreenchimento (){
    if (botaoRefeicao !== undefined){
       if (botaoBeBida !== undefined){
        if (botaoSobremesa !== undefined){
            const habilitarButton = document.querySelector('.fechar-pedido')
            habilitarButton.removeAttribute('disabled')
            habilitarButton.innerHTML = "Finalizar Pedido";
            habilitarButton.classList.add('button-selecionado')    
        }
        }
    }
}