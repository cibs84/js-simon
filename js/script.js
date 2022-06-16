// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1) Genero in un array 5 numeri casuali invocando una funzione apposita
// - Creazione array randomNumbers
// - Con una funzione creo in un loop dei numeri random 
// - Per ogni numero SE non è già presente nell'array ce lo pusho 
// - Continuo FINCHE' non arrivo a 5 elementi nell'array

// 2) Creo un alert in cui si visualizzeranno per 30 secondi i numeri casuali
// - Creo una funzione setTimeout con un tempo d'attesa di 30000 ms e richiamo in una funzione anonima un alert
// - Inserisco nell'alert l'array con i 5 numeri generati casualmente

// 3) Chiedo all'utente per 5 volte di seguito di inserire in un prompt i numeri che ha visualizzato precedentemente
// - Creo un array userNumbers
// - In un loop chiedo all'utente per 5 volte di inserire un numero provando a trovare corrispondenza con quelli visualizzati nel precedente alert
// Per ogni numero:
// - - Lo pusho nell'array userNumbers

// 4) In un alert si visualizzeranno quanti e quali numeri sono stati individuati
// - Creo un array rightNumbers
// - Con un ciclo for scorro i numeri inseriti dall'utente -> array userNumbers
// Per ogni numero:
// - - SE è incluso nell'array randomNumbers ALLORA lo pusho nell'array righNumbers
// - Creo un alert in cui stamperò quanti (rightNumbers.length) e quali (rightNumbers) numeri sono stati individuati


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