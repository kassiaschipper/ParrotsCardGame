
const faceCards = [
    '<img class="images" src="imagens\\bobrossparrot.gif"></img>',
    '<img class="images" src="imagens\\explodyparrot.gif"></img>',
    '<img class="images" src="imagens\\fiestaparrot.gif"></img>',
    '<img class="images" src="imagens\\metalparrot.gif"></img>',
    '<img class="images" src="imagens\\revertitparrot.gif"></img>',
    '<img class="images" src="imagens\\tripletsparrot.gif"></img>',
    '<img class="images" src="imagens\\unicornparrot.gif"></img>'
]

let cardsOnTheBoard = 0;
let deckOfCards = [];
let numberOfCards = 0;
let numberOfMoves = 0;
let faceUpCards = [];
let firstCardUp = false;
let secondCardUp = false;
let matchingPairs = 0
let numberOfMatchings = 0;
let click = 0;

function verifyNumberOfCards() {
    numberOfCards = prompt(" De 4 a 14, com quntas cartas você quer jogar? Lembre-se de escolher um número par!");


    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0 || numberOfCards === isNaN) {
        numberOfCards = prompt("Você precisa escolher um número válido entre 4 e 14!")
    }
    let teste = ["testwe", "testi", "tests", "testa", "trea"];
    teste.sort(comparador);
    console.log(teste);
    startingTheGame();
}


function startingTheGame() {

    // faceCards.sort(comparador)

    cardsOnTheBoard = numberOfCards / 2; //Pega o número de cartas escolhido pelo usuário e divide por dois para poder formar o par.

    for (let index = 0; index < cardsOnTheBoard; index++) { //percorre a lista embaralhada de gifs e adicionas no deck (pelo index) a quantidade referente a metade do numero digitado pelo usuario
        deckOfCards.push(faceCards[index]);
        deckOfCards.push(faceCards[index]);

    }
    deckOfCards.sort(comparador);//embaralha o deck com todos os pares
    for (let index = 0; index < numberOfCards; index++) { //percorre a lista embaralhada de gifs e adicionas no deck (pelo index) a quantidade referente a metade do numero digitado pelo usuario

        toPutTheCards(index);
    }
    // alert (deckOfCards);


    console.log(deckOfCards);

}

function comparador() {
    return Math.random() - 0.5;
}

function toPutTheCards(index) {// aula de quinta

    let container = document.querySelector(".container");
    container.innerHTML += ` 
        <div class="card" onclick="turnTheCard(this);">
        <div class="face-back-card"><img  src="imagens\\front.png"></div>
        <div class="face-card hidden">${deckOfCards[index]}</div>
    </div>`;
}

function turnTheCard(card) {
    numberOfMatchings = numberOfCards / 2;

    click++;
    
    if(click < 3){
        
        let backCard = card.querySelector(".face-back-card ");
        let faceCard = card.querySelector(".face-card ");

        backCard.classList.add("hidden");
        faceCard.classList.remove("hidden");

        card.classList.add("disable-onclick");
        
        numberOfMoves++;
        
        faceUpCards.push(card);
        
            if(click === 2){
                setTimeout(comparePair, 1000);
            }    
    }

}

function comparePair () {
   
    let firstImage = faceUpCards[0].querySelector(".images");
    let secondImage = faceUpCards[1].querySelector(".images");

    if(firstImage.src === secondImage.src){
        matchingPairs++;
        
    } else{
       
        for(i=0; i<2; i++){
        
            let backCard = faceUpCards[i].querySelector(".face-back-card ");
            let faceCard = faceUpCards[i].querySelector(".face-card ");

            backCard.classList.remove("hidden");
            faceCard.classList.add("hidden");

            faceUpCards[i].classList.remove("disable-onclick");
        }
             

    }
    faceUpCards=[];
    click = 0;
    if(matchingPairs === numberOfMatchings){
        alert(`Você ganhou em ${numberOfMoves} jogadas!`);
    }
}
