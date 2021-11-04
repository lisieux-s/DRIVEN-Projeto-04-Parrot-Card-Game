n = prompt("Com quantas cartas você quer jogar?");

//repetir prompt até entrar n válido
if( (n < 4 || n > 14) && n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}

//gerar array com n elementos

let cardsArray = [];
for(i = 0; i == n; i++){
    cardsArray.push(i)
}

alert(cardsArray)