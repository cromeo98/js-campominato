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
// BONUS A) Dichiaro tre variabili per le tre difficoltà che potrà scegliere l'utente
var diffEasy = 1;
var diffMedium = 2;
var diffHard = 3;

// BONUS B) Chiedo all'utente che difficoltà desidera
var userChoiceOfDiff = parseInt(prompt('scrivi '+ diffEasy +' per difficoltà facile, '+ diffMedium + ' per difficoltà media, ' + diffHard + ' per difficoltà difficile'));

// BONUS C) Verifico che l'utente abbia scelto il numero corrispondente alla difficoltà
var i = 0;

while (userChoiceOfDiff != diffEasy && userChoiceOfDiff != diffMedium && userChoiceOfDiff != diffHard){
    userChoiceOfDiff = parseInt(prompt('Attenzione! Scrivi 1 per difficoltà facile, 2 per difficoltà media, 3 per difficoltà difficile'));
    i++;
}

// BONUS D) Dichiaro una var difficoltà vuota che riempirò con 100 se l'utente avrà scelto easy, 80 se avrà scelto medium e 50 se la difficoltà è hard
var difficulty;

switch (userChoiceOfDiff) {
    case 1:
        difficulty = 100
        break;
    case 2:
        difficulty = 80
        break;
    case 3:
        difficulty = 50
        break;    
}

// Richiamo funzione del gioco
gameBasedOnDiff(difficulty, mines);

var playAgain = parseInt(prompt('vuoi giocare ancora? (1 = si 2 = no)'));

var i = 0

while (playAgain != 1 && playAgain != 2){
    var playAgain = parseInt(prompt('vuoi giocare ancora? (1 = si 2 = no)')); 
}

if (playAgain == 1) {
    location.reload();
} else {
    document.getElementById('play').innerHTML = 'BUONA GIORNATA';
}


//*********functions */
function gameBasedOnDiff(difficulty, conditionOfLoss) {
    
    // 2b) Dichiaro un array che verrà riempita con i numeri scelti dall'utente
    var userNums = [];

    // 2c) Chiedo all'utente tramite un ciclo while di scegliere un numero tramite (100 - 16 (diffEasy)) prompt con cui scegliere un numero da 1 a 100
    var i = 0;

    while (userNums.length < difficulty - 16 && !conditionOfLoss.includes(userNum)){

    var userNum = parseInt(prompt('inserisci un numero tra 1 e ' + difficulty + '. I numeri scelti sono: ' + userNums + ' (non puoi scegliere un numero precedentemente scelto.)')); // 3b) Altrimenti si continua chiedendo all’utente un altro numero.

    if(conditionOfLoss.includes(userNum)) {
        alert ('Hai perso! sei riuscito ad indovinare ' + userNums.length + ' numeri, che sono: '+ userNums); // 3a) Se il numero è presente nella lista dei numeri generati, la partita termina. 3c) La partita termina quando il giocatore inserisce un numero “vietato”. 4a) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    } else if(userNum >= 0 && userNum <= difficulty && !userNums.includes(userNum) && !conditionOfLoss.includes(userNum)){
        userNums.push(userNum);
    } 
    if (userNums.length == difficulty - 16) {
        alert('Hai vinto!! I tuoi numeri vincenti sono :' + userNums) // 3d) O raggiunge il numero massimo possibile di numeri consentiti. 4a) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    }
    i++;
} 
}


