// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
// Consigli del giorno:
//  :party_wizard: ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… 

// 1) Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// 1a) Dichiaro un'array da riampire con i 16 numeri casuali
var mines = [];

// 1b) Creo il ciclo while che genererà i 16 numeri casuali
var i = 0;

while (mines.length < 16){
    var randomNum = Math.floor(Math.random() * 100) + 1;
    if (!mines.includes(randomNum)) {
        mines.push(randomNum);
    } 
    i++;
}
console.log(mines);

// 2) In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// 2a) Dichiaro tre variabili per le tre difficoltà che potrà scegliere l'utente
var diffEasy = 100;
var diffMedium = 80;
var diffHard = 50;

// 2b) Dichiaro un array che verrà riempita con i numeri scelti dall'utente
var userNums = [];

// 2c) Chiedo all'utente tramite un ciclo while di scegliere un numero tramite (100 - 16 (diffEasy)) prompt con cui scegliere un numero da 1 a 100
var i = 0;

while (userNums.length < diffEasy - 16 && !mines.includes(userNum)){

    var userNum = parseInt(prompt('inserisci un numero tra 1 e ' + diffEasy + '. I numeri scelti sono: ' + userNums + ' (non puoi scegliere un numero precedentemente scelto.)')); // 3b) Altrimenti si continua chiedendo all’utente un altro numero.

    if(mines.includes(userNum)) {
        console.log(userNum);
        alert ('Hai perso! sei riuscito ad indovinare ' + userNums.length + ' numeri, che sono: '+ userNums); // 3a) Se il numero è presente nella lista dei numeri generati, la partita termina. 3c) La partita termina quando il giocatore inserisce un numero “vietato”
    } else if(userNum >= 0 && userNum <= diffEasy && !userNums.includes(userNum) && !mines.includes(userNum)){
        userNums.push(userNum);
    } 
    if (userNums.length == diffEasy - 16) {
        alert('Hai vinto!! I tuoi numeri vincenti sono :' + userNums) // 3d) O raggiunge il numero massimo possibile di numeri consentiti.
    }
    i++;
}

