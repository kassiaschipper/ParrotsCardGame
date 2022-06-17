
const faceCards = [
    '<img src="imagens\\bobrossparrot.gif"></img>',
    '<img src="imagens\\explodyparrot.gif"></img>',
    '<img src="imagens\\fiestaparrot.gif"></img>',
    '<img src="imagens\\metalparrot.gif"></img>',
    '<img src="imagens\\revertitparrot.gif"></img>',
    '<img src="imagens\\tripletsparrot.gif"></img>',
    '<img src="imagens\\unicornparrot.gif"></img>'
]

let cardsOnTheBoard = 0;
let deckOfCards = [];
let numberOfCards = 0;

function verifyNumberOfCards() {
    numberOfCards = prompt(" De 4 a 14, com quntas cartas você quer jogar? Lembre-se de escolher um número par!");


    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0 || numberOfCards === isNaN) {
        numberOfCards = prompt("Você precisa escolher um número válido entre 4 e 14!")
    }

    startingTheGame();
}


function startingTheGame() {

    faceCards.sort(comparador);
    cardsOnTheBoard = numberOfCards / 2; //Pega o número de cartas escolhido pelo usuário e divide por dois para poder formar o par.

    for (let index = 0; index < cardsOnTheBoard; index++) { //percorre a lista embaralhada de gifs e adicionas no deck (pelo index) a quantidade referente a metade do numero digitado pelo usuario
        deckOfCards.push(faceCards[index]);
        deckOfCards.push(faceCards[index]);
        toPutTheCards(index);
    }
    // alert (deckOfCards);
    deckOfCards.sort(comparador);//embaralha o deck com todos os pares

}

function comparador() {
    return Math.random() - 0.5;
}

function toPutTheCards(index) {// aula de quinta

    let container = document.querySelector(".container");
    container.innerHTML += ` 
        <div class="card" onclick="turnTheCard(this);">
        <div class="face-back-card"><img src="imagens\\front.png"></div>
        <div class="face-card">${deckOfCards[index]}</div>
    </div>`;
}

