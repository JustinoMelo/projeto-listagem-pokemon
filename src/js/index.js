// passo 1 pegar no js o elemento html correspondente ao botao de troca de tema, console,log(xxx); mostra a const que voce colocou e qual o item

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 pegar no js o elemento html correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3 identificar o clique do usuario no botao de troca de tema

botaoAlterarTema.addEventListener("click", () => {

    //passo 6 -  remover a classe modo-escuro no body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        // passo 8 - trocar a imagem de alterar tema para o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    }

    else {
        // passo 4 - adicionar a classe modo-escuro no body

        body.classList.add("modo-escuro");

        // passo 5 - trocar a imagem do botao de alterar tema do sol para a lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});

// body.classList.toggle("modo-escuro") seria mais facil pra voce eliminar codigo do else e if.


