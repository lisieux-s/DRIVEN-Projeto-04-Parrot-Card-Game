n = prompt("Com quantas cartas você quer jogar?");
const main = document.querySelector("main");

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
console.log(pairsShuffled);

//inserir array embaralhada como cartas no html

for (let i = 0; i < n; i++) {
    main.innerHTML +=
        `
            <article data-identifier="card" onclick="flipCard(this)">
                <div class="back face hide" data-identifier="back-face">
                    <img src="img/${pairsShuffled[i]}.gif" id="${pairsShuffled[i]}">
                </div>
                <div class="front face" data-identifier="front-face">
                    <img src="img/front.png">
                </div>
            </article>
    
        `;
}

let firstParrot = 0;
let secondParrot = 0;
let previousCard = document.querySelector(".previousCard");
console.log(previousCard);

function flipCard(card) {
    const cardFront = card.querySelector(".front");
    const cardBack = card.querySelector(".back");
    if (previousCard == null) {
        //reveal the first card
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");

        //flag as selected
        card.classList.add("previousCard")
        previousCard = card;

        //fetch the first parrot
        firstParrot = card.querySelector("img").getAttribute("id");
        console.log(firstParrot);

    } else {
        //reveal the second card
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");

        //fetch the second parrot
        secondParrot = card.querySelector("img").getAttribute("id");

        //compare parrots
        if (firstParrot == secondParrot) {
            card.removeAttribute("onclick");
            previousCard.removeAttribute("onclick");
            pairsLeft--;
            console.log(pairsLeft) //well the counter is working at least
        } else {
            setTimeout(mismatch, 1000);
            mismatch(card);
        }
        previousCard.classList.remove("previousCard");
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
}

function comparador() {
    return Math.random() - 0.5;
}