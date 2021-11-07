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
function comparador() {
    return Math.random() - 0.5;
}
const pairsShuffled = pairs.sort(comparador);
console.log(pairsShuffled);

//inserir array embaralhada como cartas no html

for (let i = 0; i < n; i++) {
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