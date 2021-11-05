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
                cardCandidate = Math.floor(Math.random()*10);
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
    
/*for(i = 0; i < n; i++){
    //escolher uma carta da pilha, que deverá ser diferente das cartas anteriores
    //(aqui, nao está randomizada. as mesmas imagens são sempre
    //atribuidas na mesma ordem e somente a posição das cartas é randomizada.)
    cardsArray.push(i);
    cardsArray.sort(comparador);

//embaralhar e distribuir cartas    
for(i = 0; i < n; i++) {
    if(i % 2 === 0) {
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
    } else {
        main.innerHTML +=
    `
        <article data-identifier="card" onclick="flipCard(this)">
            <div class="back hide" data-identifier="back-face">
                <img src="img/${i-1}.gif">
            </div>
            <div class="front show" data-identifier="front-face">
                <img src="img/front.png"> ${i}
            </div>
        </article>

    `;
    }
}
}*/    

function randomCard(card){
    let duplicates = 1;
    //decidir qual imagem será colocada nessa cartinha (back)        
        while(duplicates != 0){
            //se index é par, gif é randomizado da lista
            if(i % 2 == 0){
                let random = Math.floor(Math.random()*7 + 1) 
                imgBackRandom.push();
                duplicates = 0;
                
                //se o gif desse número já foi escolhido antes, 
                //escolher de novo 
                    //percorrer cartas já escolhidas                             
                    for(j = 0; j < i; j++){
                        //denunciar duplicatas
                        if(imgBackRandom[i] == imgBackRandom[j]){
                            duplicates++;
                        }
                    }
        } else {
            //se index é ímpar, gif é igual ao de index - 1
            imgBackRandom[i] == imgBackRandom[i-1];
        }

        
        }
}

function flipCard(card){
    card.classList.toggle(".hide");
}

function comparador() { 
	return Math.random() - 0.5; 
}