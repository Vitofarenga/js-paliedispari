const userChoice = parseInt(prompt ("Scegliere un numero da 1 a 5"));
const userChoiceDue = prompt ("Scegliere pari o dispari");

if((userChoice <= 5) && (userChoice != 0)){
    console.log("Il tuo numero è: " + userChoice);
}
else{
    alert("Il numero inserito non è valido");
}


function randomIa(){
    iaChoice = Math.floor( (Math.random() * 5) + 1);
}
randomIa(userChoice)
console.log("Il numero dell'IA è: " + iaChoice );

const sum = userChoice + iaChoice;
console.log("La somma dei numeri è: " + sum);

function pariDispari(numero){
    if(numero % 2 == 0){
        console.log("Il numero è pari");
    }
    else{
        console.log("Il numero è dispari");
    }
}

pariDispari(sum);

function vincitore(numeroVincente){
    if(numeroVincente == userChoiceDue){
        console.log("Complimenti hai vinto")
    }
    else{
        console.log("Hai perso, ritenta")
    }
}
vincitore(sum)



