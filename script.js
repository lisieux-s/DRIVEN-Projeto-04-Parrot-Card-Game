n = prompt("Com quantas cartas você quer jogar?");
pairsLeft = n/2;
const main = document.querySelector("main");

//repetir prompt até entrar n válido
while( (n < 4 || n > 14) || n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}
console.log(n);

//gerar n/2 pares
const pairs = []
for(let i = 1; i <= n/2; i++){    
        pairs.push(i);
        pairs.push(i);
}
console.log(pairs);

//embaralhar pares
const pairsShuffled = pairs.sort(comparador);
console.log(pairsShuffled);

//inserir array embaralhada como cartas no html

for(let i = 0; i < n; i++) {
            main.innerHTML +=
        `
            <article data-identifier="card" onclick="flipCard(this)">
                <div class="back hide" data-identifier="back-face">
                    <img src="img/${pairsShuffled[i]}.gif" id="${pairsShuffled[i]}">
                </div>
                <div class="front" data-identifier="front-face">
                    <img src="img/front.png">
                </div>
            </article>
    
        `;
        }

let firstParrot = 0;
let secondParrot = 0;
let previousCard = document.querySelector(".previousCard");
console.log(previousCard);

function flipCard(card){
    const cardFront = card.querySelector(".front");
    const cardBack = card.querySelector(".back");
    if(previousCard == null){
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");
        
        //flag as selected
        card.classList.add("previousCard")
        previousCard = card;

        //fetch the first parrot
        firstParrot = card.querySelector("img").getAttribute("id");
        console.log(firstParrot);

    } else {
        cardFront.classList.add("hide");
        cardBack.classList.remove("hide");

        //fetch the second parrot
        secondParrot = card.querySelector("img").getAttribute("id");

        //compare parrots
        if(firstParrot == secondParrot){
            pairsLeft--;
            console.log(pairsLeft) //well the counter is working at least
        } else {
            const previousCardFront = previousCard.querySelector(".front");
            const previousCardBack = previousCard.querySelector(".back");

            //search for previous card and hide its parrot
            previousCardFront.classList.remove("hide");
            previousCardBack.classList.add("hide");
            
            //hide the current card's parrot
            cardFront.classList.remove("hide");
            cardBack.classList.add("hide");
        }
        
        previousCard.classList.remove("previousCard");
        
    }

    
}

function errouOtário(){
    
}

function comparador() { 
	return Math.random() - 0.5; 
}