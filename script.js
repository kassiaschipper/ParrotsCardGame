function verifyNumberOfCards() {
    let numberOfCards = prompt(" De 4 a 14, com quntas cartas você quer jogar? Lembre-se de escolher um número par!");


    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0 || numberOfCards === isNaN) {
        numberOfCards = prompt("Você precisa escolher um número válido entre 4 e 14!")
    }
}

const faceCards = [
    <img src="imagens\bobrossparrot.gif"></img>,
    <img src="imagens\explodyparrot.gif"></img>,
    <img src="imagens\fiestaparrot.gif"></img>,
    <img src="imagens\metalparrot.gif"></img>,
    <img src="imagens\revertitparrot.gif"></img>,
    <img src="imagens\tripletsparrot.gif"></img>,
    <img src="imagens\unicornparrot.gif"></img>
]
let cardsOnTheBoard = 0;
let deckOfCards = [];


function startingTheGame() {

    faceCards.sort(comparador);
    let cardsOnTheBoardHalf = numberOfCards / 2; //Pega o número de cartas escolhido pelo usuário e divide por dois para poder formar o par.

    for (let index = 0; index < numberOfCards; index++){ //percorre a lista embaralhada de gifs e adicionas no deck (pelo index) a quantidade referente a metade do numero digitado pelo usuario
        
        if( index < cardsOnTheBoardHalf ){ //se o index por menor que a metade das cartas escolhidas pelo usuario, ele adiona ao deck a carta
            deckOfCards.push(faceCards[index]);
        }
        else{ // se não ele adiciona a carta referente ao index - o valor referente a metadade da quantidade digitada pelo usuario, para formar os pares  
            deckOfCards.push(faceCards[index-cardsOnTheBoardHalf]);
        }
        
    }

    deckOfCards.sort(comparador);//embaralha o deck com todos os pares

    
}
