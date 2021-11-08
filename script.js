n = prompt("Com quantas cartas você quer jogar?");
const main = document.querySelector("main");
const timerBox = document.querySelector(".timer")
let t = 0;

pairsLeft = n / 2;

//repetir prompt até entrar n válido
while ((n < 4 || n > 14) || n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}

//gerar n/2 pares
const pairs = []
for (let i = 1; i <= n / 2; i++) {
    pairs.push(i);
    pairs.push(i);
}

//embaralhar pares
const pairsShuffled = pairs.sort(comparador);

//inserir array embaralhada como cartas no html

for (let i = 0; i < n; i++) {
    main.innerHTML +=
        `
            <article data-identifier="card" onclick="flipCard(this)">
                <div class="back hide" data-identifier="back-face">
                    <img src="img/${pairsShuffled[i]}.gif" alt="${pairsShuffled[i]}" id="${pairsShuffled[i]}">
                </div>
                <div class="front" data-identifier="front-face">
                    <img src="img/front.png">
                </div>
            </article>
    
        `;
}

//iniciar timer
/*setInterval(() => {
    timer()
  }, 1000)
*/

let moves = 0;
let firstParrot = 0;
let secondParrot = 0;
let newAttempt = true;

let previousCard = document.querySelector(".previousCard");

function flipCard(card) {
    moves++;
    const cardFront = card.querySelector(".front");
    const cardBack = card.querySelector(".back");
    if (newAttempt === true) {
        //reveal the first card
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");

        //flag as selected
        card.classList.add("previousCard");
        previousCard = card;

        //fetch the first parrot
        firstParrot = card.querySelector("img").getAttribute("id");

        newAttempt = false;

    } else {
        //block third selection
        document.querySelector("span").classList.remove("hide");
        //reveal the second card
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");

        //fetch the second parrot
        secondParrot = card.querySelector("img").getAttribute("id");

        //compare parrots
        if (firstParrot == secondParrot) {
            card.removeAttribute("onclick");
            previousCard.removeAttribute("onclick");

            card.classList.add("match");
            previousCard.classList.add("match");

            pairsLeft--;
            document.querySelector("span").classList.toggle("hide");
        } else {
            setTimeout(() => {
                mismatch(card)
              }, 1000)
        
        }
        //resetar o previousCard
        previousCard.classList.remove("previousCard");

       
        newAttempt = true;
    }

    if(pairsLeft === 0){
        endGame(moves);
    }

}

function mismatch(card) {
    const cardFront = card.querySelector(".front");
    const cardBack = card.querySelector(".back");

    const previousCardFront = previousCard.querySelector(".front");
    const previousCardBack = previousCard.querySelector(".back");

    //search for previous card and hide its parrot
    previousCardFront.classList.remove("hide");
    previousCardBack.classList.add("hide");

    //hide the current card's parrot
    cardFront.classList.remove("hide");
    cardBack.classList.add("hide");

     //remove selection blocker
     document.querySelector("span").classList.toggle("hide");
}

function timer() {
    while(pairsLeft > 0) {
        t++;
        timerBox.innerHTML = 
        `
            <p>${t}</p>
        `;
    }
}

function endGame(X){
    alert("Você ganhou em " + X + " jogadas!");
    const playAgain = prompt("Jogar novamente? (s/n)");
    if(playAgain == "s"){
        location.reload(true);
    }
}

function comparador() {
    return Math.random() - 0.5;
}
