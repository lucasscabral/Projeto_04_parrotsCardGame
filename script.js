
let qtdCartas;

qtdCartas = Number(prompt("Com quantas cartas você quer jogar? Números pares entre 4 e 14, podendo escolher um desses também"));

formarCartas(qtdCartas);
function formarCartas(qtdCartas){
    while((qtdCartas % 2 === 1) || (qtdCartas < 4 || qtdCartas > 14)){
        qtdCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    }
    console.log(qtdCartas);
}

let cartas = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];

// Após esta linha, a cartas estará embaralhada
cartas.sort(comparador);

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
    return Math.random() - 0.5; 
}

montarDeck(qtdCartas);
function montarDeck(qtdCartas){
    let cardsDiv = document.querySelector(".box-conteudo");
    cardsDiv.innerHTML = [];

    let qtdImagens = qtdCartas/2;
    let cards= [];

    for(let x=0; x<qtdImagens; x++){
        cards.push(
            `<div  class="cards" onclick="virarCarta(this)">
                <div class="costa-carta face">
                    <img src="/imagens/front.png"/>
                </div>
                <div class="frente-carta face escondido">
                    <img src="/imagens/${cartas[x]}" data-name="${cartas[x]}">
                </div>
            </div>`
            );
            
        cards.push(
                `<div class="cards" onclick="virarCarta(this)">
                    <div class="costa-carta face">
                        <img src="/imagens/front.png"/>
                    </div>
                    <div class="frente-carta face escondido">
                        <img src="/imagens/${cartas[x]}" data-name="${cartas[x]}">
                    </div>
                </div>`
                );
    }

     cards.sort(comparador);

    for(let i=0; i<qtdCartas; i++){ 
        cardsDiv.innerHTML += cards[i];
    }
}



let nJogadasGeral = 0;
let nJogadasTentativa = 0;

function virarCarta(elemento){
    nJogadasGeral++;
    nJogadasTentativa++;

    let costaCarta = elemento.querySelector(".costa-carta");
    costaCarta.classList.add("escondido");

    let frenteCarta = elemento.querySelector(".frente-carta");
    frenteCarta.classList.remove("escondido");

    let cartaSelecionada = document.querySelector(".carta-selecionada");
    
    if(nJogadasTentativa <= 2){
        elemento.classList.add("carta-selecionada");
        if(cartaSelecionada !== null){
            let imgDaCartaJaSelecionada = cartaSelecionada.querySelector(".frente-carta").querySelector("img");

            let imgDaCartaSelecionada = frenteCarta.querySelector("img");

            // verificar se sao iguais
            if(imgDaCartaJaSelecionada.dataset.name == imgDaCartaSelecionada.dataset.name){
                cartaSelecionada.removeAttribute("onclick");
                elemento.removeAttribute("onclick");

                elemento.classList.remove("carta-selecionada");
                cartaSelecionada.classList.remove("carta-selecionada");
                
                cartaSelecionada.classList.add("acertou");
                elemento.classList.add("acertou");
                let cartasAcertadas = document.getElementsByClassName("acertou");
                if(cartasAcertadas.length === qtdCartas){
                    alert(`Você ganhou em ${nJogadasGeral} jogadas`);
                }

            }else{
                console.log('sao diferentes');
                costaCarta.classList.remove("escondido");


                 // tempo de 1s e vira as cartas novamente
               setTimeout (function(){
                costaCarta.classList.remove("escondido");
                frenteCarta.classList.add("escondido");
                elemento.classList.remove("carta-selecionada");

                cartaSelecionada.classList.remove("carta-selecionada");
                cartaSelecionada.querySelector(".costa-carta").classList.remove("escondido");
                cartaSelecionada.querySelector(".frente-carta").classList.add("escondido");
               }, 1000);
            }
            nJogadasTentativa = 0;
        }
    }

    console.log(nJogadasGeral);
} 