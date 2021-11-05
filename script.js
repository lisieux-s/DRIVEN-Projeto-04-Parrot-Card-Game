n = prompt("Com quantas cartas você quer jogar?");
const main = document.querySelector("main");
let imgBackRandom = [];

//repetir prompt até entrar n válido
while( (n < 4 || n > 14) || n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}

//gerar baralho
const cardsArray = [];
for(let i = 0; i < n; i++){
    cardsArray.push(i);
}

//distribuir os pares de cartas aleatoriamente
card = [];
for(let i = 0; i < n; i++) {
        /*if(i % 2 === 0) {
            let cardCandidate = 0;
            let candidateChosen = false;
            let instances = 1;

            //processo seletivo de candidato a carta:
            //um valor para carta só pode aparecer duas vezes
            //se o valor já existe em duas cartas, escolher outro valor
            while(candidateChosen == false){
                cardCandidate = Math.floor(Math.random()*8);
                for(let j = 1; j < n; j++){
                    if(cardCandidate = card[j]){
                        instances++;
                    }
                }
                if(instances <= 2){
                    candidateChosen = true;
                } else {
                    candidateChosen = false;
                }
            }
            
            //ao vitorioso, os espólios
            card[i] = cardCandidate;
*/

            main.innerHTML +=
        `
            <article data-identifier="card" onclick="flipCard(this)">
                <div class="back hide" data-identifier="back-face">
                    <img src="img/${i}.gif">
                </div>
                <div class="front show" data-identifier="front-face">
                    <img src="img/front.png"> ${i}
                </div>
            </article>
    
        `;
        }

function randomCard(){
    const card = Math.floor(Math.random()*8);
    return card;
    
}

function flipCard(card){
    card.classList.toggle(".hide");
}

function comparador() { 
	return Math.random() - 0.5; 
}