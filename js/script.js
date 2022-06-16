// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1) Con una funzione creo in un nuovo array randomNumbers 5 numeri random senza doppioni 
let randomNumbers = genRndNumbersArray(5, 1, 100);
console.log(randomNumbers);


// 2) Creo un alert dove stampo l'array con i 5 numeri generati casualmente
alert(`Prova a ricordare questi numeri: ${randomNumbers}`);


// 3) Dopo 30 secondi dalla chiusura dell'alert, chiedo all'utente per 5 volte di seguito di inserire in un prompt i numeri che ha visualizzato precedentemente
// - Creo un array userNumbers
let userNumbers = [];
// - Creo un setTimeout che richiama dopo 30sec una funzione anonima che comprende i seguenti passaggi:
setTimeout(function() {
    // - In un loop chiedo all'utente per 5 volte di inserire un numero provando a trovare corrispondenza con quelli visualizzati nel precedente alert
    // Per ogni numero:
    for (let i = 1; i <= 5; i++) {
        // - - Pusho nell'array userNumbers
        userNumbers.push(parseInt(prompt(`Inserisci un numero provando a trovare corrispondenza con quelli visualizzati nel precedente messaggio - ${i}/5`)));
    }
    // 4) In un alert si visualizzeranno quanti e quali numeri sono stati individuati
    // - Creo un array rightNumbers
    let rightNumbers = [];
    // - Con un ciclo for scorro i numeri inseriti dall'utente -> array userNumbers
    // Per ogni numero:
    for (let i = 0; i < userNumbers.length; i++) {
        const thisUserNumber = userNumbers[i];
        // - - SE è incluso nell'array randomNumbers ALLORA lo pusho nell'array righNumbers
        if (randomNumbers.includes(thisUserNumber)) {
            rightNumbers.push(thisUserNumber);
        }
    }
    // - Creo un alert in cui stamperò quanti (rightNumbers.length) e quali (rightNumbers) numeri sono stati individuati
    alert(`Ti sei ricordato ${rightNumbers.length} numeri: ${rightNumbers}`);
}, 30000);


// -----------------------
// FUNCTIONS
// -----------------------


// Genera un array di un numero dato di elementi 'howManyNumbers' in cui ogni elemento è un numero random estratto da un range di numeri stabilito
// L'array che risulta non ha duplicati
// howManyNumbers -> quanti numeri generare
// minNumber -> il numero minimo del range da cui generare il numero casuale
// maxNumber -> il numero massimo del range da cui generare il numero casuale
// return: array con i numeri generati
function genRndNumbersArray(howManyNumbers, minNumber, maxNumber) {
    const randomNumbersArray = [];
    
    while (randomNumbersArray.length < howManyNumbers) {
        const rndNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
    
        if (!randomNumbersArray.includes(rndNumber)) {
            randomNumbersArray.push(rndNumber);
        }
    }
    
    return randomNumbersArray;
}