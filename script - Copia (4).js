n = prompt("Com quantas cartas você quer jogar?");
pairsLeft = n / 2;
const main = document.querySelector("main");

//repetir prompt até entrar n válido
while ((n < 4 || n > 14) || n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}
console.log(n);

//gerar n/2 pares
const pairs = []
for (let i = 1; i <= n / 2; i++) {
    pairs.push(i);
    pairs.push(i);
}
console.log(pairs);

//embaralhar pares
const pairsShuffled = pairs.sort(comparador);
console.log(pairsShuffled);

//inserir array embaralhada como cartas no html

for (let i = 0; i < n; i++) {
    main.innerHTML +=
        `
            <article class="card" data-identifier="card">
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


function comparador() {
    return Math.random() - 0.5;
}