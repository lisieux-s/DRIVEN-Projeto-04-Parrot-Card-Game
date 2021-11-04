n = prompt("Com quantas cartas você quer jogar?");
let imgBackRandom = [];

//repetir prompt até entrar n válido
while( (n < 4 || n > 14) || n % 2 !== 0) {
    n = prompt("Com quantas cartas você quer jogar?");
}

//gerar array com n elementos
const cardsArray = [];
for(i = 0; i < n; i++){
    cardsArray.push(i);
    displayCards(cardsArray);
    //amada??? deu certo????? wtf

    
}
for(i = 0; i < n; i++) {
}

console.log(cardsArray)

function displayCards(cardsArray) {
    const table = document.querySelector("main");
    let duplicates = 1;
    //criar a cartinha
    table.innerHTML += `<article>${cardsArray}</article>`;

    //decidir qual imagem será colocada nessa cartinha (back)        
        while(duplicates != 0){
            //se index é par, gif é randomizado da lista
            if(i % 2 == 0){
                imgBackRandom.push = getRandomInt(7);
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
            imgBackRandom[i] == imgBackRandom[i-1]
        }

        
        }
            
    //colocar classe emptyCard em cada carta criada
    //para identificar que essa carta precisa ser preenchida
    document.querySelector("article").classList.add(".emptyCard");
    
    //"no primeiro elemento que tiver as classes emptyCard e front,
    //adicionar imagem front."
    document.querySelector(".emptyCard.front").innerHTML = `<img src="img/front.png">`
  
    //"no primeiro elemento que tiver as classes emptyCard e back,
    //adicionar imagem back
    //(que foi selecionada no if acima)"
    document.querySelector(".emptyCard.back").innerHTML = `<img src="${imgBackRandom[i]}.gif">`
    
    //"No final, remover a classe emptyCard da carta que ganhou essas classes
    //para que ela não seja modificada no ciclo seguinte."
    document.querySelector(".emptyCard").classList.remove(".emptyCard")

}