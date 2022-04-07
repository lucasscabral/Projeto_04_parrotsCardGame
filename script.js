
let qtdCartas;

qtdCartas = Number(prompt("Com Quantas você quer jogar? Números pares entre 4 e 14, podendo escolher um desses támbem"));

formarCartas(qtdCartas);
function formarCartas(qntItens){
    while(qtdCartas % 2 === 1){
        qtdCartas = Number(prompt("Com Quantas você quer jogar?"));
    }
    console.log(qtdCartas);
}
 

montarDeck(qtdCartas);
function montarDeck(decksFormadas){
    let cardsDiv = document.querySelector(".box-conteudo");
    cardsDiv.innerHTML = [];

    for(let i = 0; i < decksFormadas; i++){ 
    cardsDiv.innerHTML += `<div class="cards" onclick="virarCarta(this)">
    <img src="/imagens/front.png" class="costa-carta"/>
    <img src="/imagens/bobrossparrot.gif" class="escondido"/>
</div>`;
    
    }


    console.log(cardsDiv);
}

function virarCarta(elemento){
    let cardSelec = document.querySelector(".cards");
    
    if(cardSelec !== null){
        elemento.classList.add("back-cards");
        elemento.classList.remove("costa-carta");
    }

}  













/*minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
*/



















//elemento.classList.remove("frente-carta");
/*let cards = document.querySelectorAll(".cards");
cards.classList.add("escondido");*/

/*if(qtdEscolida === 4 ){
    escolherCartas = document.querySelectorAll(".cards");
    escolherCartas.c 


/*function escolhaCartas(qtdCartas){



}*/



/*  
}*/




/*elemento.classList.remove("frente-carta");*/
/*let cards = document.querySelectorAll(".cards");
cards.classList.add("escondido");*/

/*let qtdCartas = Number(prompt("Com Quantas você quer jogar? Números pares entre 4 e 14, podendo escolher um desses támbem"));

while(qtdCartas % 2 === 1){
    qtdCartas = Number(prompt("Com Quantas você quer jogar?"));
}
//
function escolhaCartas(qtdCartas){

let qtdEscolida = qtdCartas;
let escolherCartas = [];

if(qtdEscolida === 4 ){
    escolherCartas = document.querySelectorAll(".cards");
    escolherCartas.c 

    }
}*/



/*for(let i = 0; i < qtdEscolida; i++){
    escolherCartas.push[i];
    alert("Foram 4");
}
console.log(escolherCartas);*/