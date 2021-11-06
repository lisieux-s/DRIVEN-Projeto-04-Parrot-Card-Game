n = prompt("Com quantas cartas você quer jogar?");
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
                    <img src="img/${pairsShuffled}.gif">
                </div>
                <div class="front show" data-identifier="front-face">
                    <img src="img/front.png"> ${pairsShuffled[i]}
                </div>
            </article>
    
        `;
        }

function flipCard(card){
    card.classList.toggle(".hide");
}

function comparador() { 
	return Math.random() - 0.5; 
}
