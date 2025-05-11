let numero = 345345;
let texto = "Já clicou no SININHO";

function abacate() {
    console.log(numero);
    console.log(texto);
}

abacate(); // Chame a função aqui

let circulo = document.querySelector(".circulo");
let imagem = document.querySelector(".copo");

function trocarCor(cor) {
    circulo.style.backgroundColor = cor;
}

function trocaImagem(nomeImagem) {
    imagem.src = nomeImagem; // Agora sim: troca pela imagem que foi passada
}
