console.log("FILE PRESENTE")

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

// prompt inserisci parola
const parola = prompt("Inserisci una parola");

//dividere la parola
const parolaDivisa = parola.split("");

// invertire parola
const parolaInvert = parolaDivisa.reverse("");

//riunire parola divisa
const parolaInvertMerge = parolaDivisa.join("");

// check se palindromo
palindromo = checkParola (console.log(parola));
function checkParola(){
  if (parola === parolaInvertMerge){
  messaggio = "è un palindromo"
  console.log("è un palindromo");
 }
  else{
    messaggio = "non è un palindromo"
    console.log("non è un palindromo")
  };
  document.getElementById("wordInput").innerHTML = `${parola} ${messaggio}.`
};