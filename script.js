function verifyNumberOfCards() {
    let numberOfCards = prompt(" De 4 a 14, com quntas cartas você quer jogar? Lembre-se de escolher um número par!" )
    

    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0 || numberOfCards === isNaN){
        numberOfCards = prompt("Você precisa escolher um número válido entre 4 e 14!")
    } 
}

