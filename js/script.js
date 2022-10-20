// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// PALINDROMA

// VARIABLES DECLARATION AND INIZIALIZATION
// html elements
const wordInput = document.getElementById("word-input");
const result = document.getElementById("result");

// prompt choose word
const parola = prompt("Inserisci una parola");

// METODO 1 con split + reverse

// divide word
const parolaDivisa = parola.split("");

// invert word
const parolaInvert = parolaDivisa.reverse("");

//join inverted word
const parolaInvertMerge = parolaDivisa.join("");

// Function check if palindrome
function checkParola(){
  if (parola.toLowerCase().trim() === parolaInvertMerge.toLowerCase().trim()){
  messaggio = "è un palindromo"
  result.classList.add("text-success")
 }
  else{
    messaggio = "non è un palindromo"
    result.classList.add("text-danger")
  };
  wordInput.innerHTML = `${parola}`
  result.innerHTML =  `${messaggio}.`
};

// //METODO 2 Function revert word
// function parolaInvert(parola){
//     let parolaInvert = "";

//     for(let i = parola.length - 1; i >=0; i--){
//         parolaInvert += parola[i];
//     }
// }

palindromo = checkParola (console.log(parola));

// ====================================================================

// PARI O DISPARI

//VARIABLES DECLARATION AND INITIALIZATION
// html elements
const userChoice = document.getElementById("input-pari-dispari");
const inputBtn = document.getElementById("gioca");
const resetBtn = document.getElementById("reset");
const finalResult = document.getElementById("result-numero");
const outputComputer = document.getElementById("numero-computer");
let userNumero = document.getElementById("input-numero");

//reset
resetBtn.addEventListener('click', function(){
    userChoice.selectedIndex = 0;
    userNumero.selectedIndex = 0;
    finalResult.innerHTML = '';
    outputComputer.innerHTML = '';
});

//play
inputBtn.addEventListener('click',function(){

    //check both values
    if(userNumero.value === "" || userChoice.value === "" ){
        finalResult.innerHTML = 'Inserisci un numero valido';
        finalResult.classList.add("text-info");
        finalResult.classList.remove("text-success");
        finalResult.classList.remove("text-danger");
    }else{
        //check winner
        let computerNum = randomNumber(1, 5);
        outputComputer.innerHTML = `Il numero tirato dal computer è ${computerNum}.`
        if(userChoice.value === checkPariDispari(userNumero.value, computerNum)){
            finalResult.innerHTML = 'Hai vinto!';
            finalResult.classList.add("text-success");
            finalResult.classList.remove("text-danger");
            finalResult.classList.remove("text-info");
        }else{
            finalResult.innerHTML = 'Hai perso!';
            finalResult.classList.add("text-danger");
            finalResult.classList.remove("text-success");
            finalResult.classList.remove("text-info");
            }
        }
    });

// FUNCTIONS

//random number 1 to 5
function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
};

//adition two numbers
function checkPariDispari(num1, num2){
    const somma = parseInt(num1) + parseInt(num2);
    if(somma % 2) return 'dispari' ;

    return 'pari';
};

