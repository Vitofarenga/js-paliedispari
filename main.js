const userWord = prompt("Inserisci una parola");

function palindromo(stringa){
    i = stringa.length
    let nuovaStringa = "";
    for(i = stringa.length -1; i >=0; i--){
        nuovaStringa += stringa[i];
        if(nuovaStringa == stringa){
            console.log("La parola è palindroma");
        }
        else{
            console.log("La parola non è palindroma");
        }
    }
    
};
palindromo(userWord);
